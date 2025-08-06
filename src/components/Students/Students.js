import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import PresentStudent from "./PresentStudent";
 
const Students = () => {

  // Declaring states
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
      <StudentForm students={students} setStudents= {setStudents} studentName={studentName} setStudentName={setStudentName} editable={editable}setEditable={setEditable} editableStudent={editableStudent}/>

      {students.length === 0 && <p className="not-found">No Student Found </p>}

      <StudentList students={students} setStudents={setStudents} setEditable={setEditable} setEditableStudent={setEditableStudent} setStudentName={setStudentName} />


      <PresentStudent handleToggle={handleToggle} students={students}/>
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
