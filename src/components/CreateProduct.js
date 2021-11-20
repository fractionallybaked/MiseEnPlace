import React, { useState } from 'react';
import { createProduct } from '../api/products';

const CreateProduct = ({ setAllProducts, isAdmin }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [photo, setPhoto] = useState('');
    const [type, setType] = useState([]);

    return (
        <div>
            { isAdmin
                ? <> <h2>Create a New Product</h2>
                    <form
                        className="create-product-form"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            try {
                                if (!name || !description || !price || !quantity || !photo) {
                                    alert('Please fill out all product fields');
                                } else {
                                    const newProduct = await createProduct(
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

                                    setAllProducts(prevProducts => ([...prevProducts, newProduct]));
                                }

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

export default CreateProduct;