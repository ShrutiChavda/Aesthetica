import axios from 'axios';

const API_URL1 = "http://localhost:5000/auth1";

export const register1 = async (adminData) => {
  return await axios.post(`${API_URL1}/register1`, adminData, { withCredentials: true });
};

export const login1 = async (adminData) => {
  return await axios.post(`${API_URL1}/login1`, adminData, { withCredentials: true });
};

// export const logout = async () => {
//   return await axios.get(`${API_URL1}/logout`, { withCredentials: true });
// };
export const logout1 = async () => {
  const res = await fetch("http://localhost:5000/auth1/logout1", {
    method: "POST",
    credentials: "include", // Important to send session cookies
  });
  if (!res.ok) {
    throw new Error("Logout failed");
  }
};