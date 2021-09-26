import React from 'react';

const Cart = (props) => {
    // console.log(props.cart[0].instructor);
    const { cart } = props;
    // const add = cart.map(cartDetails => {
    //     const name = cartDetails.instructor;

    // });
    let total = 0;
    for (const price of cart) {
        total = total + price.price;
    };

    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="fw-bold">Total Course: <span className="fw-normal">{cart.length}</span></h5>
                    <h5 className="fw-bold">Total Amount: <span className="fw-normal">{total}</span></h5>
                    {/* <h6>{name}</h6> */}
                </div>
            </div>
        </div>
    );
};

export default Cart;