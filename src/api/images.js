import axios from "axios";

const imageInstance = axios.create({
  baseURL: "https://api.unsplash.com",
});

imageInstance.defaults.headers.common[
  "Authorization"
] = `Client-ID AXYkQ80gxaKjlC99-akqq6fr3TIiFFp2cBCFq8iP3TI`;

export default imageInstance;
