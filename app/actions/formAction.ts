"use server";

import { addFormToDB, randomId, validateDetails } from "@/helpers";
import { revalidatePath } from "next/cache";

export async function sendMessage(formData: FormData) {
  const { name, email, message } = Object.fromEntries(formData.entries());
  const isValid = validateDetails(
    name as string,
    email as string,
    message as string
  );

  if (isValid) {
    await addFormToDB(
      randomId(),
      name as string,
      email as string,
      message as string
    );
    revalidatePath("/contact");
  }

  return isValid;
}
