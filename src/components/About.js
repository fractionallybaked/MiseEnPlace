import React from 'react';
import { Flex, Container, Heading } from '@chakra-ui/react';
const About = (props) => {
    return (
        <Flex direction='column' align='center'
            justify="center" wrap='wrap' mt='220px'>
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
        </Flex>
    )
}

export default About;