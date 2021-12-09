import React, { useState } from "react";
import { Flex, Heading, Stack, Button, Box, InputGroup, Input, FormHelperText } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CheckoutForm = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZip] = useState("");

  return (
      <Flex
        direction="column"
        w="100wh"
        h="100vh"
        bg="#eee2df"
        justify="center"
        align="center"
      >
          <Flex
            direction="column"
            align="center"
            justify="center"
            wrap="wrap"
            mt="220px"
          >
        <Heading size='xl'>Checkout</Heading>
        <Stack
        flexDir="column"
        mb="2"
        justify="center"
        align="center"
        mt='1em'
      >
        <Box minW={{ base: "90%", md: "468px" }}>
        <form
          id="checkout"
          onSubmit={(event) => {
            event.preventDefault();

            try {
              history.push("/ordercomplete");
            } catch (err) {
              console.error(err);
            }
          }}
        >
           <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              mb='1rem'
            >
          <InputGroup>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
          </InputGroup>

          <InputGroup>
            <Input
              id="address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              required
            />
          </InputGroup>

          <InputGroup>
            <Input
              id="zip"
              type="text"
              value={zipcode}
              placeholder="Zipcode"
              onChange={(event) => {
                setZip(event.target.value);
              }}
              required
            />
          </InputGroup>

          <InputGroup>
            <Input
              id="city"
              type="text"
              placeholder="City"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
              required
            />
          </InputGroup>
          </Stack>
          <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                bg="#c97c5d"
                width="full"
              >
                Complete Checkout
              </Button>
          
        </form>
        </Box>
        </Stack>
      </Flex>
      </Flex>
  );
};

export default CheckoutForm;
