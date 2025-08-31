import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import PresentStudent from "./PresentStudent";
import AbsentStudent from "./AbsentStudent";
const Students = () => { 
  return (
    <>
      <StudentForm/>
      <StudentList/>
      <PresentStudent />
      <AbsentStudent />
    </>
  );
};

export default Students;
