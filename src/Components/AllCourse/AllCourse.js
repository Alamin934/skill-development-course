import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';

const AllCourse = () => {
    const [allCourse, setAllCourse] = useState([]);
    /*  Get and Set Fake JSON Data */
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, []);
    /* Cart functionality */
    const [cart, setCart] = useState([]);
    const handleAddToCart = (course) => {
        const newCourse = [...cart, course];
        setCart(newCourse);
    }

    return (
        <div>
            <div className="container">
                {/* Display Cart Details */}
                <div className="cart m-5 mb-0">
                    <Cart cart={cart}></Cart>
                </div>
                {/* Display All Course */}
                <div className="row mb-5">
                    <div className="course row row-cols-1 row-cols-md-3 g-4">
                        {
                            allCourse.map(course => <Course
                                key={course.id}
                                course={course}
                                handleAddToCart={handleAddToCart}
                            ></Course>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourse;