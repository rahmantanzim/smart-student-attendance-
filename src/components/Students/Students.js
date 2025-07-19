import React, { useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Faokhruddin",
      isPresent: false,
    },
  ]);
  const [studentName, setStudentName] = useState("");
  const [editable, setEditable] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const handleStudentName = (e) => {
    setStudentName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!studentName) {
      return alert("You have to enter a student name");
    }
    !editable ? createStudent() : updateStudent();
  };

  const createStudent = () => {
    const newStudent = {
      id: Date.now(),
      name: studentName,
      isPresent: undefined,
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };
  const updateStudent = () => {
    const updatedStudent = students.map((student) => {
      if (student.id === editableStudent.id) {
        return {
          ...student,
          name: studentName,
        };
      }
      return student;
    });
    setStudents(updatedStudent);
    setEditable(false);
    setStudentName("");
  };
  const editHandler = (student) => {
    setEditable(true);
    setEditableStudent(student);
    setStudentName(student.name);
  };
  const deleteHandler = (studentID) => {
    const newStudentListAfterDelete = students.filter((s) => {
      return s.id !== studentID;
    });
    setStudents(newStudentListAfterDelete);
  };
  const handlePresent = (student) => {
    const updatedStudent = students.map((s) => {
      if (s.id === student.id) {
        return {
          ...s,
          isPresent: true,
        };
      }
      return s;
    });
    setStudents(updatedStudent);
  };
  const handleAbsent = (student) => {
    const updatedStudent = students.map((s) => {
      if (s.id === student.id) {
        return {
          ...s,
          isPresent: false,
        };
      }
      return s;
    });
    setStudents(updatedStudent);
  };
  const handleToggle = (student) =>{
    const updatedStudent = students.map((s)=>{
        if(s.id === student.id){
            return {...s, isPresent:!s.isPresent}
        }
        return s;
    })
    setStudents(updatedStudent);
    
  }
  const studentList = () => {
    return students.map((student) => {
      return (
        <li key={student.id}
        className={`student-item ${student.isPresent ? "present" : "absent"}`}>
          {student.name}
          <button className="btn edit-btn" onClick={() => editHandler(student)}>Edit</button>
          <button className="btn delete-btn" onClick={() => deleteHandler(student.id)}>Delete</button>
          <button className="btn present-btn" onClick={() => handlePresent(student)}>Make Present</button>
          <button className="btn absent-btn" onClick={() => handleAbsent(student)}>Make Absent</button>
        </li>
      );
    });
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className="student-form">
        <input
          type="text"
          id="name"
          name="name"
          value={studentName}
          onChange={handleStudentName}
          placeholder="Add A student"
        />
        <button type="submit">{editable ? "Update" : "Submit"}</button>
      </form>
      {students.length === 0 && <p className="not-found">No Student Found </p>}
      <div className="student-list">
        <h2>All Students</h2>
        <ul>{studentList()}</ul>
      </div>
      <div className="student-present">
        <h2>Present Students</h2>
        <ul>
          {students
            .filter((student) => {
              return student.isPresent === true;
            })
            .map((presentStudent) => {
              return (
                <li className="student-status-item">
                  {presentStudent.name}
                  <button className="btn toggle-btn" onClick={() => handleToggle(presentStudent)}>Accidentally Added</button>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="student-absent">
        <h2>Absent Students</h2>
        <ul>
          {students
            .filter((student) => {
              return student.isPresent === false;
            })
            .map((presentStudent) => {
              return (
                <li className="student-status-item">
                  {presentStudent.name}
                  <button className="btn toggle-btn" onClick={() => handleToggle(presentStudent)}>Accidentally Added</button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Students;
