"use server";

import { supabase } from "@/supabase";
import { auth, signOut } from "./auth";
import { signIn } from "./auth";
import { revalidatePath } from "next/cache";
import { formattedDate, getNoteById } from "./data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/auth/login" });
}

export async function signupAction(formData) {
  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email").slice(0, 1000),
    password: formData.get("password").slice(0, 1000),
  });
  if (error) {
    console.error(error.message);
    return { error: error.message };
  }
  return { success: true };
}

export async function loginWithEmailPasswordAction(formData) {
  const email = formData.get("email").slice(0, 1000);
  const password = formData.get("password").slice(0, 1000);
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error(error.message);
    return { error: error.message };
  }
  await signIn("credentials", {
    email,
    password,
    redirectTo: "/",
    // redirect: false,
  });

  return { success: true };
}

export async function sendResetPasswordLinkAction(formData) {
  const email = formData.get("email").slice(0, 1000);
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    console.error(error.message);
    return { error: error.message };
  }
}

export async function updatePasswordAction(formData) {
  const accessToken = formData.get("token");
  if (accessToken) {
    await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: accessToken,
    });
  }
  const password = formData.get("password").slice(0, 1000);
  const confirmPassword = formData.get("confirmPassword").slice(0, 1000);
  if (password !== confirmPassword) return { error: "Password is not match" };
  const { data, error } = await supabase.auth.updateUser({
    password,
  });
  if (error) {
    console.error(error.message);
    return { error: error.message };
  }
  return { success: true };
}

export async function updateNoteAction(newNoteObject, id) {
  // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2) Authorization

  const note = await getNoteById(id, session.user.id);
  if (session.user.id !== note.userId)
    throw new Error("Your are not allowed to delete this note");

  const { data, error } = await supabase
    .from("notes")
    .update(newNoteObject)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error.message);
    return { error: error.message };
  }
  revalidatePath(`/${id}`);
  return data;
}

export async function createNewNoteAction(formData) {
  const session = await auth();
  const title = formData.get("title");
  const tags = formData.get("tags");
  const tagsNoSpace = tags.replace(/[\s,]+/g, ",");
  const tagsArray = tagsNoSpace
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "");
  const uniqueTags = [...new Set(tagsArray)];
  const content = formData.get("content");
  const lastEdited = formattedDate(new Date());
  const isArchived = false;
  const userId = session.user.id;

  const newNote = {
    title,
    tags: uniqueTags,
    content,
    lastEdited,
    isArchived,
    userId,
  };

  const { data, error } = await supabase
    .from("notes")
    .insert([newNote])
    .select();

  if (error) {
    console.error(error.message);
    return { error: error.message };
  }
  revalidatePath("/dashboard");
  return { sucess: true };
}

export async function archiveNote(id) {
  // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2) Authorization
  const note = await getNoteById(id, session.user.id);
  if (session.user.id !== note.userId)
    throw new Error("Your are not allowed to delete this note");

  const { data, error } = await supabase
    .from("notes")
    .update({ isArchived: true })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error.message);
  }
  revalidatePath(`/${id}`);
  return { success: true };
}

export async function restoreNote(id) {
  // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2) Authorization
  const note = await getNoteById(id, session.user.id);
  if (session.user.id !== note.userId)
    throw new Error("Your are not allowed to delete this note");

  const { data, error } = await supabase
    .from("notes")
    .update({ isArchived: false })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error.message);
  }
  revalidatePath(`/${id}`);
  return { success: true };
}

export async function deleteNote(id) {
  // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2) Authorization
  const note = await getNoteById(id, session.user.id);
  if (session.user.id !== note.userId)
    throw new Error("Your are not allowed to delete this note");

  const { error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    console.error(error.message);
    notFound();
  }
  return { success: true };
}

export async function changePassword(getData) {
  const session = await auth();
  const oldPassword = getData.get("oldPassword");
  const newPassword = getData.get("newPassword");
  const confirmPassword = getData.get("confirmPassword");

  const { error } = await supabase.auth.signInWithPassword({
    email: session.user.email,
    password: oldPassword,
  });
  if (error)
    return { error: "Your current password is incorrect. Please try again." };

  if (newPassword !== confirmPassword)
    return { error: "Password is not match" };
  if (newPassword === oldPassword)
    return {
      error: "New password cannot be the same as your current password.",
    };
  const { error2 } = await supabase.auth.updateUser({
    password: newPassword,
  });
  if (error2 || newPassword.length < 6) {
    console.error(error2);
    return { error: "Password must be at least 6 characters." };
  }
  return { success: true };
}
