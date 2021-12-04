import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Container, Heading, Stack, Box, Image } from '@chakra-ui/react';

const About = (props) => {
    const image = "https://images.unsplash.com/photo-1597528662465-55ece5734101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
    const boxImage = "https://images.unsplash.com/photo-1573376670774-4427757f7963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3BlbiUyMGJveHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60";
    const bakedImage = "https://images.unsplash.com/photo-1615735486329-c61cd40bfcc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

    return (
        <>
            <Box
                w='100%'
                h='75vh'
                bg='#EBD8D5'
                zIndex='-1'
                position='absolute'
                top='194' />
            <Flex direction='column' align='center' maxW={{ xl: '1200px' }} m='0 auto'>
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
                            Choose your Dessert(s)
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
                            We keep dessert fun and interesting. From top-rated favorites to classic recipes, we got you covered.
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

                <Flex
                    align="center"
                    justify={{ base: "center", md: "space-around", xl: "space-between" }}
                    direction={{ base: "column", md: "row" }}
                    wrap="no-wrap"
                    minH="70vh"
                    px={8}
                    mb={16}
                    mt='200px'
                >
                    <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                        <Image src={boxImage} size="100%" rounded="1rem" shadow="2xl" />
                    </Box>
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
                            Unpack your Box
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
                            We guarantee the freshness of all our locally sourced ingredients, and deliver them right to your door.
                    </Heading>
                        <Link to='/products'>
                            <button className='get-started'>
                                Get Started
                        </button>
                        </Link>
                    </Stack>
                </Flex>

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
                    <Box
                        w='100%'
                        h='75vh'
                        bg='#EBD8D5'
                        zIndex='-1'
                        position='absolute'
                        bottom='0'
                        left='0'
                        m='0 auto'
                        mb={{ base: 12, md: 0 }}
                    />
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
                            Bake, customize, enjoy
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
                            Follow our easy step-by-step recipes to make your family and friends amazing desserts.
                    </Heading>
                        <Link to='/products'>
                            <button className='get-started'>
                                Get Started
                        </button>
                        </Link>
                    </Stack>
                    <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                        <Image src={bakedImage} size="100%" rounded="1rem" shadow="2xl" />
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default About;