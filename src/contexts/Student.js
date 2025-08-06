import { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [editable, setEditable] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  const StudentContextValue = {students, setStudents,studentName, setStudentName, editable, setEditable,editableStudent,setEditableStudent}
  return(
    <StudentContext.Provider value={StudentContextValue}>
        {children}
    </StudentContext.Provider>
  );
};  

export default StudentProvider;
