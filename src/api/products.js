import axios from "axios";
import { getToken } from "../auth";

const BASE = "";

export async function getAllProducts() {
    try {
        const { data } = await axios.get(`${BASE}/products`);

        return data;
    } catch (error) {
        throw error;
    }
}

export async function getProductById(id) {
    try {
        const { data } = await axios.get(`${BASE}/products/${id}`);

        return data;
    } catch (error) {
        throw error;
    }
}

export async function createProduct(
    name,
    description,
    price,
    quantity,
    photo,
    type
) {
    try {
        const token = getToken();
        const { data } = await axios.post(
            `${BASE}/products`,
            {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                photo: photo,
                type: type
            },
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        return data;
    } catch (error) {
        throw error;
    }
}

export async function addTypeToProduct(id, type) {
    try {
        const token = getToken();

        const { data } = await axios.post(
            `${BASE}/products/${id}/type`,
            {
                type: type
            },
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        )

    } catch (error) {
        throw error
    }
}

export async function updateProduct(
    id,
    name,
    description,
    price,
    quantity,
    photo,
    type
) {
    try {
        const token = getToken();

        const { data } = await axios.patch(
            `${BASE}/products/${id}`,
            {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                photo: photo,
                type: type
            },
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        return data;
    } catch (error) {
        throw error;
    }
}

export async function deleteProduct(id) {
    try {
        const token = getToken();
        const { data } = axios.delete(
            `${BASE}/products/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        return data;
    } catch (error) {
        throw error;
    }
}