import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Apidetails from "../api/Apidetails";

const Student = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await Apidetails(); // Assuming Apidetails fetches the student and course list
        const selectedStudent = response.data.reduce((acc, course) => {
          const foundStudent = course.students.find((s) => s.id === parseInt(id));
          return foundStudent ? foundStudent : acc;
        }, null);

        setStudent(selectedStudent);

        if (selectedStudent && selectedStudent.course_id) {
          const enrolledCourse = response.data.find((course) =>
            course.students.some((s) => s.id === parseInt(id))
          );
          setCourse(enrolledCourse);
        }
      } catch (err) {
        console.error("Error fetching student details:", err);
      }
    };
    fetchStudentDetails();
  }, [id]);

  return (
    <div>
      <h1>Student Details</h1>
      {student && (
        <div>
          <h2>{student.name}</h2>
          <p>Email: {student.email}</p>
          {course && (
            <div>
              <h3>Enrolled Course Details</h3>
              <p>Course Name: {course.name}</p>
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
      )}
    </div>
  );
};

export default Student;
