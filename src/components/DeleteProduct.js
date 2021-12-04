import React from "react";
import { deleteProduct } from "../api/products";

const DeleteProduct = ({ productId, setAllProducts }) => {
  return (
    <button
      className="delete-button"
      onClick={async () => {
        try {
          await deleteProduct(productId);
          setAllProducts((prevProducts) => [
            ...prevProducts.filter((product) => product.id !== productId),
          ]);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <span className="material-icons edit-button">delete</span>
    </button>
  );
};

export default DeleteProduct;
