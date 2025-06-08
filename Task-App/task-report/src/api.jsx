import axios from "axios";

//global api 
const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, //send cookies
});

export default API;
