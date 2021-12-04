import axios from "axios";

import { getToken } from "../auth";

// const BASE = "https://polar-harbor-90312.herokuapp.com/api";
const BASE = "http://localhost:5000/api";

//

export async function addItemToCart({ productId, userId, quantity }) {
  const token = getToken();

  try {
    const { data } = await axios.post(
      `${BASE}/cart/${userId}`,
      {
        productId,
        userId,
        quantity,
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
}

//

export async function removeItemFromCart({ userId, productId, cartId }) {
  const token = getToken();

  try {
    const { data } = await axios.delete(
      `${BASE}/cart/${userId}`,

      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
        data: {
          productId,
          userId,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
}

//

export async function getUserCart(userId) {
  const token = getToken();
  try {
    const { data } = await axios.get(
      `${BASE}/cart/${userId}`,
      {
        userId,
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
}

//

export async function updateCart({ cartId, productId, quantity, userId }) {
  const token = getToken();
  try {
    const { data } = await axios.patch(
      `${BASE}/cart/${userId}`,
      {
        cartId,
        productId,
        quantity,
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
}

//

export async function checkoutCart(userId) {
  const token = getToken();
  try {
    const { data } = await axios.patch(
      `${BASE}/cart/${userId}/checkout`,
      {
        userId,
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("DATA", data);
    return data;
  } catch (err) {
    throw err;
  }
}

//

export async function getPurchaseHistory(userId) {
  const token = getToken();
  try {
    const { data } = await axios.get(
      `${BASE}/cart/${userId}/history`,
      {
        userId,
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
}
