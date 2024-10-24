import React, { useState, createContext } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Schedule from "./Schedule";
import Swap from "./Swap";
import Profile from "./Profile";
import To from "./To";
import Class from "./Class";
import logo from "./logo.jpeg";
export const TimetableContext = createContext();
import { NavLink } from "react-router-dom";
export default function App() {
  const subjects = ["Computer Network", "Dev", "PSPP", "CP"];
  const [attendance, setAttendance] = useState(Array(7).fill(null));
  const [freeTime, setFreeTime] = useState({ start: "", end: "" });
  const [yearPeriods, setYearPeriods] = useState({
    year1: 0,
    year2: 0,
    year3: 0,
    year4: 0,
  });
  const [intervals, setIntervals] = useState(Array(7).fill(""));

  function generateTimeSlots(freeTime, periodDuration) {
    const { start, end } = freeTime;

    const timeToMinutes = (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    };

    // Convert minutes since midnight back to "HH:MM" format
    const minutesToTime = (minutes) => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}`;
    };

    const startTimeInMinutes = timeToMinutes(start);
    const endTimeInMinutes = timeToMinutes(end);

    let slots = [];
    let currentTimeInMinutes = startTimeInMinutes;

    while (currentTimeInMinutes + periodDuration <= endTimeInMinutes) {
      const slotStart = minutesToTime(currentTimeInMinutes);
      const slotEnd = minutesToTime(currentTimeInMinutes + periodDuration);
      slots.push(`${slotStart} - ${slotEnd}`);
      currentTimeInMinutes += periodDuration;
    }

    return slots;
  }

  const generateTimetable = () => {
    const periodDuration = 50;
    const freeTimeSlots = generateTimeSlots(freeTime, periodDuration);

    const totalPeriods = [
      { year: 1, count: parseInt(yearPeriods.year1) },
      { year: 2, count: parseInt(yearPeriods.year2) },
      { year: 3, count: parseInt(yearPeriods.year3) },
      { year: 4, count: parseInt(yearPeriods.year4) },
    ];

    let timetable = [];
    let slotIndex = 0;

    totalPeriods.forEach(({ year, count }) => {
      for (let i = 0; i < count; i++) {
        if (slotIndex < freeTimeSlots.length) {
          timetable.push({
            year,
            period: i + 1,
            time: freeTimeSlots[slotIndex],
            subject: subjects[slotIndex % subjects.length],
            interval: intervals[slotIndex] || "",
          });
          slotIndex++;
        }
      }
    });

    return timetable;
  };

  const timetable = generateTimetable();

  return (
    <TimetableContext.Provider value={timetable}>
      <Router>
        <div className="head">
          <img className="img1" src={logo} height="50px" width="50px" />
          <h1 className="heading1">
            {" "}
            Meenakshi Sundararajan Engineering College{" "}
          </h1>
        </div>

        <div className="App">
          <div className="container">
            <header className="d-flex justify-content-center py-3">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/class"
                    className="nav-link"
                    activeClassName="active"
                  >
                    CLASS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/swap"
                    className="nav-link"
                    activeClassName="active"
                  >
                    SWAP
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/schedule"
                    className="nav-link"
                    activeClassName="active"
                  >
                    SCHEDULE
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/to"
                    className="nav-link"
                    activeClassName="active"
                  >
                    UPDATES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className="nav-link"
                    activeClassName="active"
                  >
                    PROFILE
                  </NavLink>
                </li>
              </ul>
            </header>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2 className="heading">DEPARTMENT OF AI&DS</h2>
                  <h2 className="heading">TODAY'S SCHEDULE</h2>

                  <div>
                    <label htmlFor="start-time">Free Time Start:</label>
                    <input
                      type="time"
                      id="start-time"
                      name="start"
                      value={freeTime.start}
                      onChange={(e) =>
                        setFreeTime({ ...freeTime, start: e.target.value })
                      }
                    />

                    <label htmlFor="end-time">Free Time End:</label>
                    <input
                      type="time"
                      id="end-time"
                      name="end"
                      value={freeTime.end}
                      onChange={(e) =>
                        setFreeTime({ ...freeTime, end: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <h3 className="heading">Periods for The Day</h3>
                    <label htmlFor="year1">1st Year Periods:</label>
                    <input
                      type="number"
                      id="year1"
                      name="year1"
                      value={yearPeriods.year1}
                      onChange={(e) =>
                        setYearPeriods({
                          ...yearPeriods,
                          year1: e.target.value,
                        })
                      }
                      min="0"
                      max="7"
                    />

                    <label htmlFor="year2">2nd Year Periods:</label>
                    <input
                      type="number"
                      id="year2"
                      name="year2"
                      value={yearPeriods.year2}
                      onChange={(e) =>
                        setYearPeriods({
                          ...yearPeriods,
                          year2: e.target.value,
                        })
                      }
                      min="0"
                      max="7"
                    />

                    <label htmlFor="year3">3rd Year Periods:</label>
                    <input
                      type="number"
                      id="year3"
                      name="year3"
                      value={yearPeriods.year3}
                      onChange={(e) =>
                        setYearPeriods({
                          ...yearPeriods,
                          year3: e.target.value,
                        })
                      }
                      min="0"
                      max="7"
                    />

                    <label htmlFor="year4">4th Year Periods:</label>
                    <input
                      type="number"
                      id="year4"
                      name="year4"
                      value={yearPeriods.year4}
                      onChange={(e) =>
                        setYearPeriods({
                          ...yearPeriods,
                          year4: e.target.value,
                        })
                      }
                      min="0"
                      max="7"
                    />
                  </div>

                  <div>
                    <h3 className="heading">Generated Timetable</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">YEAR</th>
                          <th scope="col">PERIOD</th>
                          <th scope="col">SUBJECT</th>
                          <th scope="col">TIME SLOT</th>
                          <th scope="col">INTERVAL (minutes)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {timetable.map((item, index) => (
                          <tr key={index}>
                            <th scope="row">{item.year}</th>
                            <td>{item.period}</td>
                            <td>{item.subject}</td>
                            <td>{item.time}</td>
                            <td>{item.interval}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              }
            />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/to" element={<To />} />
            <Route path="/class" element={<Class />} />
          </Routes>
        </div>
      </Router>
    </TimetableContext.Provider>
  );
}
