import { APIs } from "@/constant";
import axios from "axios";

const retrieveBio = async () => {
  const { BIO_AWS } = APIs;
  const { data } = await axios.get(BIO_AWS);
  return data;
};

export { retrieveBio };
