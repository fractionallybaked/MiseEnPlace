import React, { useState, useEffect } from 'react';
import { SingleProduct } from './';
import { getProductById } from '../api/products';

const SingleProductPage = ({ productId }) => {
    const [singleProd, setSingleProd] = useState([]);

    useEffect(() => {
        try {
            async function getProd() {
                const product = await getProductById(productId);
                setSingleProd(product);
            }
            getProd();
        } catch (err) {
            console.log(err)
        }

    }, []);

    return (
        <SingleProduct allProducts={singleProd} />
    )
}

export default SingleProductPage;