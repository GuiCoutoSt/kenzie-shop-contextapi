import axios from "axios";

export const api = axios.create({
  baseURL: "https://adventure-time-api.herokuapp.com/api/v1/",
});
