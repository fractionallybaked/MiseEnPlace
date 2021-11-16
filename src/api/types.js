import axios from "axios";
import { getToken } from "../auth";

const BASE = "https://polar-harbor-90312.herokuapp.com/api";

export async function getAllTypes() {
    try {
        const { data } = await axios.get(`${BASE}/types`);

        return data;
    } catch (error) {
        throw error;
    }
}

export async function getProductByType(typeName) {
    try {
        const { data } = await axios.get(`${BASE}/${typeName}/products`);

        return data;
    } catch (error) {
        throw error;
    }
}