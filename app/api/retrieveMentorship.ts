import { APIs } from "@/constant";
import axios from "axios";

const retrieveMentorships = async () => {
  const { MENTORSHIP_AWS } = APIs;
  const { data } = await axios.get(MENTORSHIP_AWS);
  return data;
};

export { retrieveMentorships };
