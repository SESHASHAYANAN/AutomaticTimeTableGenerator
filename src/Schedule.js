import React, { useState } from "react";
import "./styles.css";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const scheduleData = {
    Monday: [
      { sno: 1, subject: "AI", year: 2, sem: 4, totalPeriod: "1" },
      {
        sno: 2,
        subject: "Computer Network",
        year: 2,
        sem: 4,
        totalPeriod: "7 ",
      },
      { sno: 3, subject: "DEV", year: 2, sem: 3, totalPeriod: "1" },
      { sno: 4, subject: "PSPP", year: 1, sem: 2, totalPeriod: "6" },
    ],
    Tuesday: [
      { sno: 1, subject: "Math", year: 1, sem: 2, totalPeriod: "8 Hours" },
      { sno: 2, subject: "Physics", year: 1, sem: 2, totalPeriod: "6 Hours" },
      { sno: 3, subject: "AI", year: 2, sem: 4, totalPeriod: "9 Hours" },
    ],
    Wednesday: [
      { sno: 1, subject: "DEV", year: 2, sem: 3, totalPeriod: "4 Hours" },
      { sno: 2, subject: "AI", year: 2, sem: 4, totalPeriod: "8 Hours" },
    ],
    Thursday: [
      { sno: 1, subject: "AI", year: 2, sem: 4, totalPeriod: "9 Hours" },
      {
        sno: 2,
        subject: "Computer Network",
        year: 2,
        sem: 4,
        totalPeriod: "6 Hours",
      },
    ],
    Friday: [
      { sno: 1, subject: "PSPP", year: 1, sem: 2, totalPeriod: "1" },
      { sno: 2, subject: "Math", year: 1, sem: 2, totalPeriod: "7" },
    ],
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div className="App">
      <div className="container"></div>
      <h2 className="heading">TIMETABLE</h2>

      <div className="day-selector">
        <label>Select a day: </label>
        <select value={selectedDay} onChange={handleDayChange}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
      </div>

      <div className="tab1">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SNO</th>
              <th scope="col">SUBJECT</th>
              <th scope="col">YEAR</th>
              <th scope="col">SEM</th>
              <th scope="col"> PERIOD</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData[selectedDay].map((item) => (
              <tr key={item.sno}>
                <th scope="row">{item.sno}</th>
                <td>{item.subject}</td>
                <td>{item.year}</td>
                <td>{item.sem}</td>
                <td>{item.totalPeriod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
