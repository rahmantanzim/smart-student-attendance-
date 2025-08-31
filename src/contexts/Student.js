import { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
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

  const handleToggle = (student) => {
    const updatedStudent = students.map((s) => {
      if (s.id === student.id) {
        return { ...s, isPresent: !s.isPresent };
      }
      return s;
    });
    setStudents(updatedStudent);
  };

  const StudentContextValue = {
    students,
    setStudents,
    studentName,
    setStudentName,
    editable,
    setEditable,
    editableStudent,
    setEditableStudent,
    handleStudentName,
    handleFormSubmit,
    editHandler,
    deleteHandler,
    handlePresent,
    handleAbsent,
    handleToggle
  };
  return (
    <StudentContext.Provider value={StudentContextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
