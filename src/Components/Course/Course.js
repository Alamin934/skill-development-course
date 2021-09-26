import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import './Course.css';

const Course = (props) => {
    // console.log(props);
    const { course_name, duration, img, instructor, price, rate } = props.course;

    return (
        /* Course Details */
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="mt-3 img-size rounded-circle mx-auto" alt="" />
                <div className="card-body">

                    <ul className="list-group list-group-flush fw-bold">
                        <li className="list-group-item">Course Name: <span className="fw-normal">{course_name}</span></li>
                        <li className="list-group-item">Duration: <span className="fw-normal">{duration}</span></li>
                        <li className="list-group-item">Price: <span className="fw-normal">${price}</span></li>
                        <li className="list-group-item">Instructor: <span className="fw-normal">{instructor}</span></li>
                        <li className="list-group-item">Rating: <span className="fw-normal text-warning"><FontAwesomeIcon icon={faStar} /> {rate}</span></li>
                        <li className="list-group-item"></li>

                        {/* Add to Cart Button */}
                        <button
                            onClick={() => props.handleAddToCart(props.course)}
                            className="btn btn-dark"
                        ><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Course;