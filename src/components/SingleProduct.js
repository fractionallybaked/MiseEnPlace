import React from "react";
import {Link} from 'react-router-dom';

const SingleProduct = ({ allProducts, isAdmin }) => {
  return (
    <div className="single-product-main-container">
      {allProducts.length
        ? allProducts.map((e) => {
            return (
              <div className="single-product-card" key={e.id}>
                <img className="product-image" src={e.photo} />
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <span className="single-product-price">${e.price / 100}.00</span>
                {
                    isAdmin
                    ? <Link to={{
                        pathname:"/editproduct",
                        state:{
                            pId: e.id,
                            pName: e.name,
                            pDescription: e.description,
                            pPrice: e.price,
                            pQuantity: e.quantity,
                            pPhoto: e.photo
                        }
                    }}>
                        <button>
                            <span className="material-icons">edit</span>
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
