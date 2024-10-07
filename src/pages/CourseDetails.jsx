/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch(`https://your-backend-url/api/courses/${id}`)
            .then(response => response.json())
            .then(data => setCourse(data));
    }, [id]);

    if (!course) return <div>Loading...</div>;

    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.details}</p>
            <img src={course.img_url} alt={course.title} />
        </div>
    );
};

export default CourseDetails;
