import React from "react";

// This component shows a student's details using props
function StudentCard({ name, course, score }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <p>Score: {score}</p>
    </div>
  );
}

export default StudentCard;
