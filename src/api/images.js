import axios from "axios";

const imageInstance = axios.create({
  baseURL: "https://api.unsplash.com",
});

imageInstance.defaults.headers.common["Authorization"] = `Client-ID ${
  import.meta.env.VITE_ACCESS_KEY
}`;

export default imageInstance;
