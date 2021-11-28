import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SingleProduct } from './';
import { getProductById } from '../api/products';
import { Flex } from '@chakra-ui/react';

const SingleProductPage = ({ allProducts, isAdmin }) => {
    const [singleProd, setSingleProd] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        try {
            async function getProd() {
                const { products } = await getProductById(productId);
                setSingleProd([products]);
            }
            getProd();
        } catch (err) {
            console.log(err)
        }
    }, [allProducts]);

    return (
        <Flex direction='column' align='center' justify="center" wrap='wrap' mt='1em'>
            <SingleProduct allProducts={singleProd} isAdmin={isAdmin} />
        </Flex>
    )
}

export default SingleProductPage;