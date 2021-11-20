import React, { useState } from "react";
import { addTypeToProduct } from "../api/products";

const AddType = ({ allProducts, setAllProducts, isAdmin }) => {
  const [productId, setProductId] = useState("");
  const [type, setType] = useState("");
  return (
    <div>
      {isAdmin ? (
        <div>
          <h2>Add Type(s) to a Product</h2>
          <form
            className="add-type-form"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const updatedProduct = await addTypeToProduct(productId, type);
                setProductId("");
                setType("");
                setAllProducts((prevProduct) => [
                  ...prevProduct,
                  updatedProduct,
                ]);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <label htmlFor="product-name">Choose a Product</label>
            <select
              id="product-name"
              name="product-name"
              onChange={(e) => setProductId(e.target.value)}
            >
              {allProducts.map((e) => {
                return (
                  <option value={e.id} key={`addType-${e.id}`}>
                    {e.name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="product-type">Add a Type</label>
            <input
              type="text"
              name="product-type"
              id="product-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Enter a type"
            />
            <button>Add type</button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default AddType;
