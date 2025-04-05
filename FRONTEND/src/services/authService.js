import axios from 'axios';

const API_URL = "http://localhost:5000/auth";

export const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData, { withCredentials: true });
};

export const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData, { withCredentials: true });
};

export const logout = async () => {
  return await axios.get(`${API_URL}/logout`, { withCredentials: true });
};
