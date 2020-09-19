import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-f0511.cloudfunctions.net/api" //THE API URL
});

export default instance;

//local url:    http://localhost:5001/clone-f0511/us-central1/api
