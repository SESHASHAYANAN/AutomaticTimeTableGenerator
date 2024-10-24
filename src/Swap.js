import React, { useState } from "react";
import "./styles.css";

export default function Swap() {
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [swapStatus, setSwapStatus] = useState("");
  const [teacherConfirm, setTeacherConfirm] = useState(false);

  const timetable = [
    { period: 1, subject: "AI", teacher: "Mrs. Swetha" },
    { period: 2, subject: "Computer Network", teacher: "Mrs. Muthulakshmi" },
    { period: 3, subject: "Development", teacher: "Mrs. Jaya Priya" },
    { period: 4, subject: "PSPP", teacher: "Mrs. Mathangi" },
  ];

  const handleSwapRequest = (period) => {
    setSelectedPeriod(period);
    setSwapStatus("Waiting for confirmation...");
  };

  const handleTeacherConfirmation = () => {
    if (teacherConfirm) {
      setSwapStatus("Class swapped successfully!");
    } else {
      setSwapStatus("Waiting for the teacher's confirmation...");
    }
  };

  return (
    <div className="App">
      <div className="container"></div>

      <h2 className="heading">SWAP PERIODS</h2>
      <div className="tab1">
        <table className="table">
          <thead>
            <tr>
              <th>Period</th>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((classItem) => (
              <tr key={classItem.period}>
                <td>{classItem.period}</td>
                <td>{classItem.subject}</td>
                <td>{classItem.teacher}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSwapRequest(classItem.period)}
                  >
                    Request Swap
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedPeriod && (
        <div className="swap-card">
          <h3>Swap Period {selectedPeriod}</h3>
          <p>Requesting swap for period {selectedPeriod}.</p>
          <button
            className="btn btn-success"
            onClick={() => {
              setTeacherConfirm(true);
              handleTeacherConfirmation();
            }}
          >
            Confirm Swap
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              setTeacherConfirm(false);
              handleTeacherConfirmation();
            }}
          >
            Reject Swap
          </button>
          <p>{swapStatus}</p>
        </div>
      )}
    </div>
  );
}
