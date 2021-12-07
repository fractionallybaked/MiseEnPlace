import axios from "axios";
import { getToken } from "../auth";

const BASE = "https://mise-en-place-oui.herokuapp.com/api";

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
    const { data } = await axios.get(`${BASE}/users/`, {
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

export async function editUser(password, isAdmin, targetID) {
  try {
    const token = getToken();
    const { data } = await axios.patch(
      `${BASE}/users/edit`,
      {
        password: password,
        isAdmin: isAdmin,
        targetID: targetID,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}
