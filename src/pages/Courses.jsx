/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://your-backend-url/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data));
    }, []);

    const viewDetails = (id) => {
        navigate(`/courses/${id}`);
    };

    return (
        <div className="courses-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map(course => (
                <div key={course.course_id} className="border p-4">
                    <h3>{course.title}</h3>
                    <button onClick={() => viewDetails(course.course_id)}>View Details</button>
                </div>
            ))}
        </div>
    );
};

export default Courses;
