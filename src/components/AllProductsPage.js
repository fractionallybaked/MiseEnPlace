import React, { useState, useEffect } from "react";
import { SingleProduct } from './';
import { getProductById } from '../api/products';
import {ItemAdd} from './'

const AllProductsPage = ({ allProducts, isAdmin }) => {
    const [products, setProducts] = useState([]);
    const idArr = allProducts.map(e => e.id);

    useEffect(() => {
        async function setUp() {
            try {
                const prods = []
                for (const ids of idArr) {
                    const withType = await getProductById(ids);
                    prods.push(withType.products)
                }
                setProducts([...prods])
            } catch (err) {
                console.log(err);
            }
        }
        setUp();
    }, [allProducts]);

    const beverages = products.map(product => {
        for (let items of product.type) {
            if (items.id === 4) {
                return product
            }
        }
    }).filter(e => {
        return e !== undefined
    });

    const bakedGoods = products.map(product =>{
        for (let items of product.type){
            if (items.id !== 4){
                return product
            }
        }
    }).filter(e => {
        return e !== undefined
    });
 
    return (
        <div className="all-products-main-container">
            <div className="baked-goods-main-container">
                <h2>Baked Goods</h2>
                <SingleProduct
                    allProducts={bakedGoods}
                    isAdmin={isAdmin} />
            </div>
            <div className="beverages-main-container">
                <h2>Beverages</h2>
                <SingleProduct
                    allProducts={beverages}
                    isAdmin={isAdmin} />
            </div>
        </div>
    )
}

export default AllProductsPage;