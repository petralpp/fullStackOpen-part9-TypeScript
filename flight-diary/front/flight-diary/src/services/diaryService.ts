import axios from "axios";
const apiBaseUrl = "/api/diaries";
import { DiaryEntry } from "../types";

const getAll = async () => {
  const { data } = await axios.get<DiaryEntry[]>(apiBaseUrl);
  return data;
};

const createEntry = async (object: unknown) => {
  const response = await axios.post<DiaryEntry>(apiBaseUrl, object);
  return response.data;
};

export default { getAll, createEntry };
