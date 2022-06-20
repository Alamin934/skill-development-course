import React from 'react';

const InstructorName = (props) => {
    const { instructor } = props.course;
    return (
        <div>
            {/* display instructor name */}
            <h5>{instructor}</h5>
        </div>
    );
};

export default InstructorName;