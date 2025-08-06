import { useContext } from "react";
import { StudentContext } from "../../contexts/Student";

const StudentForm = () => {
      const {students, setStudents,studentName,setStudentName,editable,setEditable,editableStudent} = useContext(StudentContext)
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
  return (
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
  )
}

export default StudentForm

//handleFormSubmit, studentName,handleStudentName, editable