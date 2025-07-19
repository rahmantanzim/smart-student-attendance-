import React, { useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([{
    id:1,
    name: 'Faokhruddin',
    isPresent: false
  }]);
  const [studentName, setStudentName] = useState("");
  const [editable,setEditable] = useState(false);
  const [editableStudent,setEditableStudent] = useState(null);

  const handleStudentName = (e)=>{
    setStudentName(e.target.value);
  }

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    if(!studentName){
        return alert('You have to enter a student name');
    }
    !editable ? createStudent() : updateStudent(); 

  }

  const createStudent = ()=>{
    const newStudent = {
        id:Date.now(),
        name: studentName,
        isPresent: false
    }
    setStudents([...students,newStudent]);
    setStudentName('');
  }
  const updateStudent = ()=>{
    const updatedStudent = students.map((student)=>{
        if(student.id === editableStudent.id){
            return {
                ...student,
                name: studentName
            }
        }
        return student
    });
    setStudents(updatedStudent);
    setEditable(false);
    setStudentName('');
  }
  const editHandler = (student)=>{
    setEditable(true);
    setEditableStudent(student);
    setStudentName(student.name)

  }
  const deleteHandler = (studentID)=>{
    const newStudentListAfterDelete = students.filter((s)=>{
        return s.id !== studentID;
    })
    setStudents(newStudentListAfterDelete);
  }  
  const studentList = ()=>{
     return students.map((student)=>{
            return <li key={student.id}>
                {student.name}
                <button onClick={()=>{editHandler(student)}}>Edit</button>
                <button onClick={()=>{deleteHandler(student.id)}}>Delete</button>
                <button>Make Present</button>
                <button>Make Absent</button>
            </li>
        })
  }
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
        <button type="submit">{editable ? 'Update' : 'Submit'}</button>
      </form>
      {students.length === 0 && 'No Student Found'}
      <div className="student-list">
        <h2>All Students</h2>
        <ul>
            {studentList()}
        </ul>
      </div>
      <div className="student-present">
        <h2>Present Students</h2>
      </div>
      <div className="student-absent">
        <h2>Absent Students</h2>
      </div>
    </>
  );
};

export default Students;
