import React from 'react';
import coffee from '../images/coffee.jpg';
import cookies from '../images/cookies.jpg';
import tea from '../images/tea.jpg';
import { Link } from 'react-router-dom';
import { Flex, Image, Box, Stack, Heading, HStack } from '@chakra-ui/react';

const LandingPage = () => {
    const image = "https://images.unsplash.com/photo-1625574199327-6c8a521117d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    return (
        <Flex direction='column' align='center' maxW={{xl: '1200px'}} m='0 auto'>
            <Flex
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                direction={{ base: "column-reverse", md: "row" }}
                wrap="no-wrap"
                minH="70vh"
                px={8}
                mb={16}
                mt='200px'
            >

                <Stack
                    spacing={4}
                    w={{ base: "80%", md: "40%" }}
                    align={["center", "center", "flex-start", "flex-start"]}
                >
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        color="#c97c5d"
                        textAlign={["center", "center", "left", "left"]}
                    >
                        Baking Made Easy
                </Heading>
                    <Heading
                        as="h2"
                        size="md"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={["center", "center", "left", "left"]}
                    >
                        Pre-measured ingredients, and recipes delivered right to your door.
                </Heading>
                    <Link to='/products'>
                        <button className='get-started'>
                            Get Started
                    </button>
                    </Link>
                </Stack>
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                    <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
                </Box>
            </Flex>

            <Flex align="center"
                justify={{ base: "center", md: "space-around", xl: "space-around" }}
                direction={{ base: "column-reverse", md: "row" }}
                wrap="no-wrap"
                minH="70vh"
                width='100vw'
                px={8}
                mb={16}
                bg='#eee2df'
                >
                <Box m='1em'>
                    <div className="landing-inner-product-card">
                        <h3>Baked Goods</h3>
                        <Link to='/products/bakedgoods'>
                            <button>Shop Now</button>
                        </Link>
                    </div>
                    <Image size='100%' src={cookies} rounded='1rem' shadow='2xl' />
                </Box>
                <Box m='1em'>
                    <div className="landing-inner-product-card">
                        <h3>Coffee</h3>
                        <Link to='/products/beverages'>
                            <button>Shop Now</button>
                        </Link>
                    </div>
                    <Image size='100%' src={coffee} rounded='1rem' shadow='2xl' />
                </Box>
                <Box m='1em'>
                    <div className="landing-inner-product-card">
                        <h3>Tea</h3>
                        <Link to='/products/beverages'>
                            <button>Shop Now</button>
                        </Link>
                    </div>
                    <Image size='100%' src={tea} rounded='1rem' shadow='2xl'/>
                </Box>
            </Flex>
        </Flex>
    )
}

export default LandingPage;