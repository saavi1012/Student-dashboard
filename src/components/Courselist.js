import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Apidetails from "../api/Apidetails";

const Courselist = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await Apidetails();
        console.log("data", response.data);
        setCourses(response.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses &&
          courses.map((course) => (
            <li key={course.id}>
              <Link to={`/Coursedetails/${course.id}`}>
                <div>
                  <strong>{course.name}</strong>
                  <p>{course.description}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Courselist;
