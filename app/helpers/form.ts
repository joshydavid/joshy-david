import { supabase } from "../../superbase";

const validateDetails = (
  name: string,
  email: string,
  message: string,
): boolean => {
  if (name === "" || email === "" || message === "") {
    return false;
  }
  return /\S+@\S+\.\S+/.test(email);
};

const addFormToDB = async (
  uuid: any,
  name: string,
  email: string,
  message: string,
) => {
  let result = await supabase.from("form").insert({
    uuid: uuid,
    name: name,
    email: email,
    message: message,
  });

  const { error } = result;

  return error === null;
};

export { validateDetails, addFormToDB };
