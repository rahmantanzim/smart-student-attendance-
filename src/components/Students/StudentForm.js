import { useContext } from "react";
import { StudentContext } from "../../contexts/Student";

const StudentForm = () => {
  const {
    students,
    studentName,
    editable,
    handleFormSubmit,
    handleStudentName,
  } = useContext(StudentContext);

  return (
    <>
      <form onSubmit={handleFormSubmit} className="student-form">
        <input
          type="text"
          id="name"
          name="name"
          value={studentName}
          onChange={handleStudentName}
          placeholder="Add a student"
        />
        <button type="submit">{editable ? "Update" : "Submit"}</button>
      </form>
      {students.length === 0 && <p className="not-found">No Student Found </p>}
    </>
  );
};

export default StudentForm;

//handleFormSubmit, studentName,handleStudentName, editable
