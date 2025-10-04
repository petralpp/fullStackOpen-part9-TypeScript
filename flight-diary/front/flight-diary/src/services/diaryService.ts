import axios from "axios";
const apiBaseUrl = "/api/diaries";
import { DiaryEntry } from "../types";

const getAll = async () => {
  const { data } = await axios.get<DiaryEntry[]>(apiBaseUrl);

  return data;
};

export default { getAll };
