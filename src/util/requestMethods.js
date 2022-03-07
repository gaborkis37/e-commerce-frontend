import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWRlN2NjMTJjZmY0YjE2YTA0NTY1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjYwMjc4NCwiZXhwIjoxNjQ2ODYxOTg0fQ.4R6EYQtXvjfMdDselvhe_QnszWoElJFKvVhdZkMyImc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
