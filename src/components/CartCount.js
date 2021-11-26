import React, { useEffect, useState } from 'react';
import { getUserCart } from '../api/cart';
import { getMyID } from '../api/users';

const CartCount = (props) => {
    const [itemNum, setItemNum] = useState('');

    useEffect(() => {
        async function setUp() {
            try {
                const user = await getMyID();
                if (user) {
                    const cart = await getUserCart(user.id);
                    let num = 0
                    for (const items of cart) {
                        num += items.quantity
                    }
                    setItemNum(num);
                }

            } catch (error) {
                console.log(error)
            }

        }
        setUp();
    }, [itemNum]);

    return (
        <div className="cart-count-container">
            <h3 className="cart-count-number">{itemNum}</h3>
        </div>

    )
}

export default CartCount;