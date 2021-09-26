import React from 'react';
import Name from '../Name/Name';

const Cart = (props) => {
    const { cart } = props;

    let totalPrice = 0;
    for (const price of cart) {
        totalPrice = totalPrice + price.price;
    };
    // const name = cart.map(cartDetails => cartDetails.instructor);

    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="fw-bold">Total Course: <span className="fw-normal">{cart.length}</span></h5>
                    <h5 className="fw-bold">Total Amount: <span className="fw-normal">${totalPrice}</span></h5>
                    {
                        cart.map(cartDetails => <Name
                            key={cartDetails.img}
                            cartDetails={cartDetails}
                        ></Name>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;