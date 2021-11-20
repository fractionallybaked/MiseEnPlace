import React from 'react';
import {SingleProduct} from './';

const AllProductsPage=({allProducts, isAdmin})=>{
return(
    <div className= "all-products-main-container">
        <SingleProduct
        allProducts={allProducts}
        isAdmin={isAdmin} />
    </div>
)
}

export default AllProductsPage;