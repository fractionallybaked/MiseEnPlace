import React from 'react';
import { Flex, Container } from '@chakra-ui/react';
const About = (props) => {
    return (
        <Flex direction='column' align='center' 
        justify="center" wrap='wrap' mt='220px'>
        <Container centerContent>
            <Flex direction='column' align='center'>
            <h2>Mise en Place</h2>
            <p><i>(pronounced meez ahn plahs)</i></p>
            </Flex>
        </Container>
        </Flex>
    )
}

export default About;