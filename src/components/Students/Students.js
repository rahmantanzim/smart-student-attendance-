import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import PresentStudent from "./PresentStudent";
import AbsentStudent from "./AbsentStudent";
import { useContext } from "react";
import { StudentContext } from "../../contexts/Student";
const Students = () => {
  const {students, setStudents,studentName, setStudentName, editable, setEditable,editableStudent,setEditableStudent} = useContext(StudentContext)

  const handleToggle = (student) =>{
    const updatedStudent = students.map((s)=>{
        if(s.id === student.id){
            return {...s, isPresent:!s.isPresent}
        }
        return s;
    })
    setStudents(updatedStudent);
    
  }
  
  
  return (
    <>
      <StudentForm/>
      {students.length === 0 && <p className="not-found">No Student Found </p>}
      <StudentList/>
      <PresentStudent handleToggle={handleToggle} />
      <AbsentStudent handleToggle={handleToggle}/>
    </>
  );
};

export default Students;
