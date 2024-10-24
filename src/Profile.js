import React from "react";
import "./styles.css";

export default function TeacherProfile() {
  const teacher = {
    name: "Mrs. Jariya Begum",
    image: "",
    classes: ["Computer Networks", "DEV", "PSPP"],
  };

  return (
    <div className="App">
      <div className="container"></div>

      <div className="profile-container">
        <div className="profile-card">
          <img
            className="profile-image"
            src={teacher.image}
            alt={teacher.name}
          />
          <h2 className="teacher-name">{teacher.name}</h2>
          <div className="teacher-classes">
            <h3>Classes Taught:</h3>
            <ul>
              {teacher.classes.map((className, index) => (
                <li key={index}>{className}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
