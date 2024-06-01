import { supabase } from "../../superbase";

function validateDetails(
  name: string,
  email: string,
  message: string,
): boolean {
  if (name === "" || email === "" || message === "") {
    return false;
  }
  return /\S+@\S+\.\S+/.test(email);
}

async function addFormToDB(
  uuid: string,
  name: string,
  email: string,
  message: string,
): Promise<boolean> {
  const result = await supabase.from("form").insert({
    uuid: uuid,
    name: name,
    email: email,
    message: message,
  });

  const { error } = result;

  return error === null;
}

export { addFormToDB, validateDetails };
