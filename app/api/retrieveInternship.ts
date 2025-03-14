import { APIs } from "@/constant";
import axios from "axios";

const retrieveInternships = async () => {
  const { INTERNSHIP_AWS } = APIs;
  const { data } = await axios.get(INTERNSHIP_AWS);
  return data;
};

export { retrieveInternships };
