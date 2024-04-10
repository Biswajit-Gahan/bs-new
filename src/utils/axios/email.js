import axios from "axios";

export const sendMail = axios.create({
  baseURL: process.env.REACT_APP_EMAIL_URL,
});