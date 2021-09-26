import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';

const AllCourse = () => {
    const [allCourse, setAllCourse] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, []);

    const [cart, setCart] = useState([]);
    const handleAddToCart = (course) => {
        const newCourse = [...cart, course];
        setCart(newCourse);
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="course-container col-md-9">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                allCourse.map(course => <Course
                                    key={course.id}
                                    course={course}
                                    handleAddToCart={handleAddToCart}
                                ></Course>)
                            }
                        </div>
                    </div>
                    <div className="cart-container col-md-3">
                        <div className="row">
                            <Cart cart={cart}></Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourse;