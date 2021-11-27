import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SingleProduct } from './';
import { getProductById } from '../api/products';

const SingleProductPage = (props) => {
    const [singleProd, setSingleProd] = useState([]);
    const { productId } = useParams();
    
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