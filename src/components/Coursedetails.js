import React, { useState, useEffect } from "react";
import Apidetails from "../api/Apidetails";
import { useParams } from "react-router-dom";

const Coursedetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await Apidetails(); // Assuming Apidetails fetches the course list
        const selectedCourse = response.data.find((course) => course.id === parseInt(id));
        setCourse(selectedCourse);
      } catch (err) {
        console.error("Error fetching course details:", err);
      }
    };
    fetchCourseDetails();
  }, [id]);

  return (
    <div>
      <h1>Course Details</h1>
      {course && (
        <div>
          <h2>{course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          <p>Description: {course.description}</p>
          <p>Enrollment Status: {course.enrollmentStatus}</p>
          <p>Thumbnail: {course.thumbnail}</p>
          <p>Duration: {course.duration}</p>
          <p>Schedule: {course.schedule}</p>
          <p>Location: {course.location}</p>
          <p>Prerequisites : {course.prerequisites}</p>
        </div>
      )}
    </div>
  );
};

export default Coursedetails;
