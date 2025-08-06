import React from 'react'

const StudentList = ({students,setStudents,setEditable,setEditableStudent,setStudentName}) => {
  const studentList = () => {
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
    <div><div className="student-list">
        <h2>All Students</h2>
        <ul>{studentList()}</ul>
      </div></div>
  )
}

export default StudentList