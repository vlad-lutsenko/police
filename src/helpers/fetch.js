import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const getList = async () => await axios.get("/last-duty");

export const getPoliceman = async (number) =>
  await axios.get(`/last-duty/${number}`);

export const offerStory = async (number, story) =>
  await axios.post(`/response/${number}`, story);
