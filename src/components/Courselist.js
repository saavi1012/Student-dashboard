import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Apidetails from "../api/Apidetails";

const Courselist = () => {
  const [courses, setCourses] = useState(null);
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apidetails();
        console.log("Data", response.data);

        if (response.data && response.data.length > 0) {
          setCourses(response.data);

          const studentsDataArray = response.data.map((course) => ({
            courseId: course.id,
            students: course.students,
          }));

          setStudentsData(studentsDataArray);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
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

      <h1>Student List</h1>
      <ul>
        {studentsData.map((data) =>
          data.students.map((student) => (
            <li key={student.id}>
              <Link to={`/Student/${student.id}`}>
                <div>
                  <strong>{student.id}, {student.name}</strong>
                  <p>Email: {student.email}</p>
                  <p>Course ID: {data.courseId}</p>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Courselist;
