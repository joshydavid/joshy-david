"use server";

import { addFormToDB, validateDetails } from "@/helpers";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

export async function sendMessage(formData: FormData): Promise<boolean> {
  const { name, email, message } = Object.fromEntries(formData.entries());
  const isValid = validateDetails(
    name as string,
    email as string,
    message as string,
  );

  if (isValid) {
    await addFormToDB(
      uuidv4(),
      name as string,
      email as string,
      message as string,
    );
    revalidatePath("/contact");
  }

  return isValid;
}
