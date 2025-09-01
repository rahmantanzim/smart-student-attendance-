import React, { useContext } from "react";
import { StudentContext } from "../../contexts/Student";

const StudentList = () => {
  const { studentState, dispatch, makePresentHandler, makeAbsentHandler } =
    useContext(StudentContext);
  const studentList = () => {
    return studentState.students.map((student) => {
      return (
        <li
          key={student.id}
          className={`student-item ${student.isPresent ? "present" : "absent"}`}
        >
          {student.name}
          <button
            className="btn edit-btn"
            onClick={() => dispatch({ type: "edit_student", payload: student })}
          >
            Edit
          </button>
          <button
            className="btn delete-btn"
            onClick={() =>
              dispatch({ type: "delete_student", payload: student.id })
            }
          >
            Delete
          </button>
          <button
            className="btn present-btn"
            onClick={() => makePresentHandler(student)}
          >
            Make Present
          </button>
          <button
            className="btn absent-btn"
            onClick={() => makeAbsentHandler(student)}
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
