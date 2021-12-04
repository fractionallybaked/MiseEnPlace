import React from 'react';
import { SingleProduct } from './';
import { Flex, Heading } from '@chakra-ui/react';

const SearchResultsPage = ({ allProducts, query, setQuery }) => {
    const filteredProducts = allProducts.filter(e => {
        const title = e.name.toLowerCase();
        const description = e.description.toLowerCase();
        const price = String(e.price);
        const queryArr = query.toLowerCase().split(' ');

        for (let i = 0; i < queryArr.length; i++) {
            if (title.includes(queryArr[i]) || description.includes(queryArr[i]) || price.includes(queryArr[i])) {
                return e
            }
        }
    });

    return (
        <>
            {filteredProducts.length
                ? <Flex direction='column' align='center' justify="center" wrap='wrap' mt='220px'>
                    <h2>Search Results for "{query}"</h2>
                    <SingleProduct allProducts={filteredProducts} />
                </Flex>
                : <Flex direction='column' align='center' justify="center" wrap='wrap' mt='300px'>
                    <Heading fontSize='1.5rem' textAlign='center'>We did not find any products matching "{query}"</Heading>
                </Flex>
            }
        </>
    )
}

export default SearchResultsPage;