import axios from "axios";
import { getToken } from "../auth";

// export const BASE = "https://polar-harbor-90312.herokuapp.com/api";
const BASE = "http://localhost:5000/api";

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username: username,
      password: password,
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username: username,
      password: password,
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMyID() {
  try {
    const token = getToken();
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllUsers() {
  try {
    const token = getToken();
    const { data } = await axios.get(`${BASE}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
