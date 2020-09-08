import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const getList = async () => await axios.get("/last-duty");
