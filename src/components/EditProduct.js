import React, { useState } from "react";
import { updateProduct } from "../api/products";
import { useLocation, useHistory } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const EditProduct = ({ setAllProducts, isAdmin }) => {
  const pageLocation = useLocation();
  const { pId, pName, pDescription, pPrice, pQuantity, pPhoto } =
    pageLocation.state;

  const [name, setName] = useState(pName);
  const [description, setDescription] = useState(pDescription);
  const [price, setPrice] = useState(pPrice);
  const [quantity, setQuantity] = useState(pQuantity);
  const [photo, setPhoto] = useState(pPhoto);

  const history = useHistory();

  const handleClick = () => {
    history.push("./products");
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      wrap="wrap"
      mt="220px"
    >
      {isAdmin ? (
        <>
          <h2>Edit a Product</h2>
          <form
            className="create-product-form"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const editedProduct = await updateProduct(
                  pId,
                  name,
                  description,
                  price,
                  quantity,
                  photo
                );
                setName("");
                setDescription("");
                setPrice("");
                setQuantity("");
                setPhoto("");
                // setType('');

                setAllProducts((prevProducts) => [
                  ...prevProducts,
                  editedProduct,
                ]);
                handleClick();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <input
              type="text"
              id="product-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product Name"
            />

            <textarea
              id="product-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Product Description"
              rows={6}
            />

            <input
              type="number"
              id="product-price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />

            <input
              type="number"
              id="product-quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
            />

            <input
              type="text"
              id="product-photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Photo URL"
            />

            <button>Edit Product</button>
          </form>
        </>
      ) : null}
    </Flex>
  );
};

export default EditProduct;
