import React, { useState } from "react";
import { editUser, getMyID } from "../api/users";

const ChangePassword = ({ isLoggedIn }) => {
  const [password, setPassword] = useState("");

  return (
    <div>
      {isLoggedIn ? (
        <div className="create-new-password-main-container">
          <h2>Set a New Password</h2>
          <form
            className="password-form"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const me = await getMyID();
                const updatedProduct = await editUser(password, false, me.id);
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
      ) : (
        <div>Error: You don't have permission for this function </div>
      )}
    </div>
  );
};

export default ChangePassword;
