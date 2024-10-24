import React, { useState } from "react";
import "./styles.css";

const To = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({
    title: "",
    note: "",
    year: "1",
  });
  const [filterYear, setFilterYear] = useState("all");

  // Add new flashcard to the top
  const addFlashcard = () => {
    setFlashcards([newFlashcard, ...flashcards]);
    setNewFlashcard({ title: "", note: "", year: "1" });
  };

  // Set flashcard background color based on year
  const getYearColor = (year) => {
    switch (year) {
      case "1":
        return "lightblue";
      case "2":
        return "yellow";
      case "3":
        return "peachpuff";
      case "4":
        return "palevioletred";
      default:
        return "white";
    }
  };

  // Filter flashcards by year
  const filteredFlashcards = flashcards.filter(
    (flashcard) => filterYear === "all" || flashcard.year === filterYear
  );

  return (
    <div className="App">
      <div className="container">
        {/* Navigation Header */}

        {/* Flashcard Input */}
        <div className="flashcard-input">
          <input
            type="text"
            className="title-input"
            placeholder="Title"
            value={newFlashcard.title}
            onChange={(e) =>
              setNewFlashcard({ ...newFlashcard, title: e.target.value })
            }
          />
          <textarea
            className="note-input"
            placeholder="Take a note..."
            value={newFlashcard.note}
            onChange={(e) =>
              setNewFlashcard({ ...newFlashcard, note: e.target.value })
            }
          ></textarea>
          <select
            className="year-select"
            value={newFlashcard.year}
            onChange={(e) =>
              setNewFlashcard({ ...newFlashcard, year: e.target.value })
            }
          >
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
          <button className="add-button" onClick={addFlashcard}>
            Add
          </button>
        </div>

        {/* Filter by Year */}
        <div className="year-filter">
          <label>Filter by Year: </label>
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          >
            <option value="all">All Years</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>

        {/* Display Flashcards */}
        <div className="flashcards">
          {filteredFlashcards.map((flashcard, index) => (
            <div
              key={index}
              className="flashcard"
              style={{ backgroundColor: getYearColor(flashcard.year) }}
            >
              <h4 className="flashcard-title">{flashcard.title}</h4>
              <p className="flashcard-note">{flashcard.note}</p>
              <div className="signatures">
                <div>
                  <label>Teacher's Sign:</label>
                  <input type="text" className="signature-input" />
                </div>
                <div>
                  <label>HOD's Sign:</label>
                  <input type="text" className="signature-input" />
                </div>
              </div>
              <div className="feedback">
                <label>Student Feedback (Out of 5):</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  className="feedback-input"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default To;
