import axios from "axios";

export const api = axios.create({
  baseURL: '/api/',
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true
})


