import axios from "axios";

const Client = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "48820bec6750fb7304d3b4c6eddf3ee5",
  },
});
export default Client;
