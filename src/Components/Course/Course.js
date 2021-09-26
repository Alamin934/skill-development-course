import React from 'react';
import './Course.css';

const Course = (props) => {
    // console.log(props);
    const { course_name, duration, img, instructor, price, rate } = props.course;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="mt-3 img-size rounded-circle mx-auto" alt="" />
                <div className="card-body">
                    <ul className="list-group list-group-flush fw-bold">
                        <li className="list-group-item">Course Name: <span className="fw-normal">{course_name}</span></li>
                        <li className="list-group-item">Duration: <span className="fw-normal">{duration}</span></li>
                        <li className="list-group-item">Price: <span className="fw-normal">${price}</span></li>
                        <li className="list-group-item">Instructor: <span className="fw-normal">{instructor}</span></li>
                        <li className="list-group-item">Rating: <span className="fw-normal">{rate}</span></li>
                        <li className="list-group-item"></li>
                        <button
                            onClick={() => props.handleAddToCart(props.course)}
                            className="btn btn-dark"
                        >Add To Cart</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Course;