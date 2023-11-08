import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

export { api };

