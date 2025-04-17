import { supabase } from "@/supabase";
import { notFound } from "next/navigation";

export const formattedDate = (date, showMin = true) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...(showMin && { hour: "2-digit" }),
    ...(showMin && { minute: "2-digit" }),
    ...(showMin && { second: "2-digit" }),
  });

export const formattedTags = (tags) => {
  if (typeof tags === "object") return tags;
  const tagsNoSpace = tags.replace(/[\s,]+/g, ",");
  const tagsArray = tagsNoSpace
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "");
  const uniqueTags = [...new Set(tagsArray)];
  return uniqueTags;
};

export async function getUser(email) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  return data;
}

export async function createUser(newUser) {
  const { data, error } = await supabase
    .from("users")
    .insert([newUser])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("User could not be created");
  }
  return data;
}

export async function getNotes(userId) {
  const { data: notes, error } = await supabase
    .from("notes")
    .select("*")
    .eq("userId", userId)
    .eq("isArchived", false)
    .order("lastEdited", { ascending: false });

  if (error) {
    console.error(error.message);
    throw new Error("Can not get notes");
  }

  return notes;
}

export async function getAllNotes(userId) {
  const { data: notes, error } = await supabase
    .from("notes")
    .select("*")
    .eq("userId", userId)
    .order("lastEdited", { ascending: false });

  if (error) {
    console.error(error.message);
    throw new Error("Can not get notes");
  }

  return notes;
}

export async function getNoteById(noteId, userId) {
  const { data: notes, error } = await supabase
    .from("notes")
    .select("*")
    .eq("userId", userId)
    .eq("id", noteId)
    .single();

  if (error) {
    console.error(error.message);
    notFound();
  }

  return notes;
}

export async function getNoteByArchive(userId) {
  const { data: notes, error } = await supabase
    .from("notes")
    .select("*")
    .eq("userId", userId)
    .is("isArchived", true)
    .order("lastEdited", { ascending: false });
  if (error) {
    console.error(error.message);
    notFound();
  }

  return notes;
}

export async function getTags(userId) {
  const { data: tags, error } = await supabase
    .from("notes")
    .select("tags")
    .eq("userId", userId);

  if (error) {
    console.error(error.message);
    notFound();
  }

  return tags;
}

export async function getNotesByTags(id, tag) {
  const { data: notes, error } = await supabase
    .from("notes")
    .select("*")
    .eq("userId", id)
    .contains("tags", [tag])
    .order("lastEdited", { ascending: false });

  if (error) {
    console.error(error.message);
    notFound();
  }
  if (notes.length < 1) notFound();
  return notes;
}
