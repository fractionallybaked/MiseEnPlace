import React from "react";
import {Flex, Heading, Text} from '@chakra-ui/react';

const OrderComplete = () => {
  return (
    <Flex direction='column' align='center' maxW={{xl: '1200px'}} m='0 auto'>
      <Flex direction='column' align='center' justify="center" wrap='wrap' mt='220px'>
      <Heading as='h2' fontFamily='Cormorant Garamond'>Order Complete</Heading>
      <Text size='m'>Thank you for shopping with us!</Text>
      </Flex>
    </Flex>
  );
};

export default OrderComplete;
