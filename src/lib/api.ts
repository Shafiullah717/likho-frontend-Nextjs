// src/lib/api.ts
import axios from 'axios';

const API = axios.create({
  // baseURL: 'http://127.0.0.1:8000/api/',
  baseURL: 'https://shafiullah.pythonanywhere.com/api/',
  
});

export default API;
