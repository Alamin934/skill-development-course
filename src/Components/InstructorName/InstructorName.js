import React from 'react';

const InstructorName = (props) => {
    const { instructor } = props.cartDetails;
    return (
        <div>
            {/* display instructor name */}
            <li>{instructor}</li>
        </div>
    );
};

export default InstructorName;