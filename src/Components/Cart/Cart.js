import React from 'react';
import InstructorName from '../InstructorName/InstructorName';

const Cart = (props) => {
    const { cart } = props;
    //Cart Total Price
    let totalPrice = 0;
    for (const course of cart) {
        totalPrice = totalPrice + course.price;
    };

    return (
        //Cart Details
        <div className="card p-3 text-center bg-light">
            <div className="card-body">
                <h5 className="fw-normal">Total Course: <span className="fw-bold">{cart.length}</span></h5>
                <h5 className="fw-normal">Total Amount: <span className="fw-bold">${totalPrice}</span></h5>
                {
                    cart.map(course => <InstructorName
                        key={course.id}
                        course={course}
                    ></InstructorName>)
                }
            </div>
        </div >
    );
};

export default Cart;