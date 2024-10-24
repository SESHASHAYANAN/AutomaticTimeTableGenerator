import React, { useContext, useState } from "react";
import "./styles.css";
import { TimetableContext } from "./App";

export default function Class() {
  const timetable = useContext(TimetableContext);
  const [yearPeriods, setYearPeriods] = useState({
    year1: 0,
    year2: 0,
    year3: 0,
    year4: 0,
  });

  const [selectedYear, setSelectedYear] = useState("All");

  const handleYearPeriodsChange = (event) => {
    const { name, value } = event.target;
    setYearPeriods({
      ...yearPeriods,
      [name]: value,
    });
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredSchedule = (year) => {
    return timetable.filter(
      (item) => year === "All" || item.year === parseInt(year)
    );
  };

  const renderSchedule = (schedule) => (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">PERIOD</th>
          <th scope="col">SUBJECT</th>
          <th scope="col">YEAR</th>
          <th scope="col">TIME SLOT</th>
          <th scope="col">INTERVAL</th>
          <th scope="col">ATTENDANCE</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((item, index) => (
          <tr key={index}>
            <th scope="row">{item.period}</th>
            <td>{item.subject}</td>
            <td>{item.year}</td>
            <td>{item.time}</td>
            <td>{item.interval}</td>
            <td>
              <input
                type="checkbox"
                checked={item.isAttended || false}
                onChange={() => {}}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="App">
      <div className="container">
        <h2 className="heading">Class Schedule</h2>

        <div></div>

        <div>
          <label htmlFor="year-select">Select Year:</label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="All">All</option>
            {[1, 2, 3, 4].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="tab1">
          {selectedYear === "All" &&
            [1, 2, 3, 4].map((year) => (
              <div key={year}>
                <h2
                  style={{
                    fontFamily:
                      'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                  }}
                >
                  Year {year}
                </h2>
                {renderSchedule(filteredSchedule(year))}
              </div>
            ))}

          {selectedYear !== "All" && (
            <div>
              <h2
                style={{
                  fontFamily:
                    'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                }}
              >
                Year {selectedYear}
              </h2>
              {renderSchedule(filteredSchedule(selectedYear))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
