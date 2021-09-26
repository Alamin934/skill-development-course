import React from 'react';
import Name from '../InstructorName/InstructorName';

const Cart = (props) => {
    const { cart } = props;
    //Cart Total Price
    let totalPrice = 0;
    for (const price of cart) {
        totalPrice = totalPrice + price.price;
    };

    return (
        //Cart Details
        <div className="card p-3 text-center bg-light">
            <div className="card-body">
                <h5 className="fw-normal">Total Course: <span className="fw-bold">{cart.length}</span></h5>
                <h5 className="fw-normal">Total Amount: <span className="fw-bold">${totalPrice}</span></h5>
                {
                    cart.map(cartDetails => <Name
                        key={cartDetails.id}
                        cartDetails={cartDetails}
                    ></Name>)
                }
            </div>
        </div>
    );
};

export default Cart;