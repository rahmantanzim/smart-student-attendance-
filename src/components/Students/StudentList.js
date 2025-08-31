import React, { useContext } from "react";
import { StudentContext } from "../../contexts/Student";

const StudentList = () => {
  const {
    students,
    editHandler,
    deleteHandler,
    handlePresent,
    handleAbsent
  } = useContext(StudentContext);
  const studentList = () => {
    return students.map((student) => {
      return (
        <li
          key={student.id}
          className={`student-item ${student.isPresent ? "present" : "absent"}`}
        >
          {student.name}
          <button className="btn edit-btn" onClick={() => editHandler(student)}>
            Edit
          </button>
          <button
            className="btn delete-btn"
            onClick={() => deleteHandler(student.id)}
          >
            Delete
          </button>
          <button
            className="btn present-btn"
            onClick={() => handlePresent(student)}
          >
            Make Present
          </button>
          <button
            className="btn absent-btn"
            onClick={() => handleAbsent(student)}
          >
            Make Absent
          </button>
        </li>
      );
    });
  };
  return (
    <div>
      <div className="student-list">
        <h2>All Students</h2>
        <ul>{studentList()}</ul>
      </div>
    </div>
  );
};

export default StudentList;
