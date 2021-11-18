import React from 'react';

const SingleProduct = ({ allProducts }) => {
    return (
        <div>
            {
                allProducts.length
                    ? allProducts.map(e => {
                        return (
                            <div key={e.id}>
                                <img src={e.photo}/>
                                <h2>{e.name}</h2>
                                <p>{e.description}</p>
                                <span>${e.price / 100}.00</span>
                            </div>
                        )
                    })
                    : null
            }
        </div>
    )
}

export default SingleProduct;