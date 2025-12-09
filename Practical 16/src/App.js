import React from "react";
import StudentCard from "./StudentCard";
import SimpleForm from "./SimpleForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Practical 16 - Node & ReactJS</h1>

      {/* Task 1: StudentCard components */}
      <h2>Student Details</h2>
      <StudentCard name="Akshat Singh" course="BCA Full Stack" score={95} />
    
      

      {/* Task 2: SimpleForm component */}
      <h2>Simple Form</h2>
      <SimpleForm />
    </div>
  );
}

export default App;

