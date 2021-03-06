import React from "react";
import { SingleProduct } from "./";
import { Flex, Heading } from "@chakra-ui/react";

const SearchResultsPage = ({ allProducts, query, setQuery }) => {
    const filteredProducts = allProducts.filter((e) => {
        const title = e.name.toLowerCase();
        const description = e.description.toLowerCase();
        const price = String(e.price);
        const queryArr = query.toLowerCase().split(" ");

        for (let i = 0; i < queryArr.length; i++) {
            if (
                title.includes(queryArr[i]) ||
                description.includes(queryArr[i]) ||
                price.includes(queryArr[i])
            ) {
                return e;
            }
        }
    });

    return (
        <Flex direction='column' align='center' maxW={{ xl: '1200px' }} m='0 auto'>
            {filteredProducts.length ? (
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    wrap="wrap"
                    mt="220px"
                >
                    <Heading as='h2' fontFamily="Cormorant Garamond">
                        Search Results for "{query}"
              </Heading>
                    <SingleProduct allProducts={filteredProducts} />
                </Flex>
            ) : (
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    wrap="wrap"
                    mt="300px"
                >
                    <Heading fontSize="1.5rem" textAlign="center">
                        We did not find any products matching "{query}"
          </Heading>
                </Flex>
            )}
        </Flex>
    );
};

export default SearchResultsPage;
