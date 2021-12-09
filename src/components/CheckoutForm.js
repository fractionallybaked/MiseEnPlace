import React, { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CheckoutForm = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZip] = useState("");

  return (
    <div>
      <h2>Checkout</h2>
      <Flex
        direction="column"
        w="100wh"
        h="100vh"
        bg="#eee2df"
        justify="center"
        align="center"
      >
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
          <fieldset>
            <label>Name</label>
            <input
              id="name"
              type="text"
              placeholder="First and Last"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
          </fieldset>

          <fieldset>
            <label>Address</label>
            <input
              id="address"
              type="text"
              placeholder="Street name and number"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              required
            />
          </fieldset>

          <fieldset>
            <label>Zipcode</label>
            <input
              id="zip"
              type="text"
              value={zipcode}
              onChange={(event) => {
                setZip(event.target.value);
              }}
              required
            />
          </fieldset>

          <fieldset>
            <label>City</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
              required
            />
          </fieldset>
          <button type="submit">Complete Checkout</button>
        </form>
      </Flex>
    </div>
  );
};

export default CheckoutForm;
