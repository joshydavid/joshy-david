"use server";

import { addFormToDB, randomId, validateDetails } from "@/helpers";
import { revalidatePath } from "next/cache";

export async function sendMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!validateDetails(name, email, message)) return false;

  await addFormToDB(randomId(), name, email, message);
  revalidatePath("/contact");
  return true;
}
