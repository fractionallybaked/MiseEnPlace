import React, {useEffect, useState} from "react";
import { Link, useLocation } from 'react-router-dom';
import { ItemAdd } from './';
import {getMyID} from '../api/users';

const SingleProduct = ({ allProducts, isAdmin }) => {
const [userId, setUserId]= useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getUser() {
      const user = await getMyID();
      setUserId(user.id);
    }
    getUser();
  }, []);

  return (
    <div className="single-product-main-container">
      {allProducts.length
        ? allProducts.map((el) => {
          let e;
          el.products ? e = el.products : e = el

          return (
            <div className="single-product-card" key={e.id}>
              <img className="product-image" src={e.photo} />
              <h3>{e.name}</h3>
              <div className= "outerDivWrapper">
                <div className="outerDiv">
                  <div className="scrollableContent">
              <p>{e.description}</p>
              </div>
              </div>
              </div>
              <span className="single-product-price">${(Math.round(e.price) / 100).toFixed(2)}</span>
              { location.pathname !== '/cart'
                ? <ItemAdd
                productId={e.id}
                userId={userId}
                quantity={1} />
                : null
              }
              {
                isAdmin
                  ? <Link to={{
                    pathname: "/editproduct",
                    state: {
                      pId: e.id,
                      pName: e.name,
                      pDescription: e.description,
                      pPrice: e.price,
                      pQuantity: e.quantity,
                      pPhoto: e.photo
                    }
                  }}>
                    <button>
                      <span className="material-icons edit-button">edit</span>
                    </button>
                  </Link>
                  : null
              }
            </div>
          );
        })
        : null}
    </div>
  );
};

export default SingleProduct;
