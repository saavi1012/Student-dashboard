import React, { useState, useEffect } from "react";
import Apidetails from "../api/Apidetails"; // Assuming Apidetails has your API configuration

const Courselist = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    // Define the async function within the effect
    const fetchCourses = async () => {
      try {
        // Assume that RestaurantFinder function was an analogy for fetching course data
        // You should replace this with your actual data fetching logic
        const response = await Apidetails();
        console.log("response", response.products);
        console.log("data", response.total);
        setCourses(response.products); // Update state with fetched courses
      } catch (err) {
        // Log any error that occurs during fetching or data parsing
        console.error("Error fetching courses:", err);
      }
    };

    // Call the fetchCourses async function
    fetchCourses();
  }, []); // Only re-run the effect if setCourses changes which should not happen, but this is to reflect your reference pattern

  // Render the fetched courses or provide a loading state if not yet loaded
  return (
    <div>
      <h1>Course List</h1>
    </div>
  );
};

export default Courselist;
