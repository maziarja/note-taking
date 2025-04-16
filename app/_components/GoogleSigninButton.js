import Image from "next/image";

import { signInAction } from "../_lib/action";
import GmailButton from "./GmailButton";

function GoogleSigninButton() {
  return (
    <form action={signInAction}>
      <GmailButton />
    </form>
  );
}

export default GoogleSigninButton;
