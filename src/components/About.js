import React from 'react';
import { Flex, Container, Heading, Stack } from '@chakra-ui/react';
const About = (props) => {
    return (
        <Flex direction='column' align='center' maxW={{xl: '1200px'}} m='220 auto'>
    
            <Flex
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                direction={{ base: "column-reverse", md: "row" }}
                wrap="no-wrap"
                minH="70vh"
                px={8}
                mb={16}
            >

                <Stack
                    spacing={4}
                    w={{ base: "80%", md: "40%" }}
                    align={["center", "center", "flex-start", "flex-start"]}
                >
                        <Container centerContent>
                <Flex direction='column' align='center'>
                    <Heading
                        as='h2'
                        fontFamily='Cormorant Garamond'>
                        Mise en Place
                </Heading>
                    <p><i>(pronounced meez ahn plahs)</i></p>
                </Flex>
            </Container>
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
                </Stack>
        </Flex>
        </Flex>
    )
}

export default About;