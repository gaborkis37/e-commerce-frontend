import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWRlN2NjMTJjZmY0YjE2YTA0NTY1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjM5OTMzMywiZXhwIjoxNjQ2NjU4NTMzfQ.8FnuZXbAlrXvXtePjXOgof6fsI2-vzRGxwqmmhjzhY0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
