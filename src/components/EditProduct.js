import React, { useState } from 'react';
import { updateProduct } from '../api/products';
import { useLocation } from 'react-router-dom';

const EditProduct = ({ setAllProducts, isAdmin }) => {
    const pageLocation = useLocation();
    const { pName, pDescription, pPrice, pQuantity, pPhoto, pType } = pageLocation.state;

    const [name, setName] = useState(pName);
    const [description, setDescription] = useState(pDescription);
    const [price, setPrice] = useState(pPrice);
    const [quantity, setQuantity] = useState(pQuantity);
    const [photo, setPhoto] = useState(pPhoto);
    const [type, setType] = useState(pType);

    return (
        <div>
            {isAdmin
                ? <><h2>Edit a Product</h2>
                    <form
                        className="create-product-form"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            try {
                                const editedProduct = await updateProduct(
                                    name,
                                    description,
                                    price,
                                    quantity,
                                    photo,
                                    type
                                );
                                setName('');
                                setDescription('');
                                setPrice('');
                                setQuantity(0);
                                setPhoto('');
                                setType('');

                                setAllProducts(prevProducts => ([...prevProducts, editedProduct]));

                            } catch (err) {
                                console.log(err)
                            }
                        }}>

                        <input
                            type="text"
                            id="product-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Product Name" />

                        <textarea
                            id="product-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Product Description"
                            rows={6} />

                        <input
                            type="number"
                            id="product-price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price" />

                        <input
                            type="number"
                            id="product-quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="Quantity" />

                        <input
                            type="text"
                            id="product-photo"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            placeholder="Photo URL" />

                        <input
                            type="text"
                            id="product-type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            placeholder="Product Type" />
                        <button>Create New Product</button>
                    </form>
                </>
                : null
            }
        </div>
    )
}

export default EditProduct;