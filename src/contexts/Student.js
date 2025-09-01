import { createContext, useReducer } from "react";

export const StudentContext = createContext();

const studentReducer = (state,action)=>{
  switch(action.type){
    case 'change_student_name' : {
      return{
        ...state,
        studentName: action.payload
      }
    }
    case 'create_student' : {
      const newStudent = {
        id: Date.now(),
        name: state.studentName,
        isPresent: undefined,
      };
      return {
        ...state,
        students: [...state.students, newStudent],
        studentName: ''
      }
    }
    case 'edit_student':{
      return{
        ...state,
        editable: true,
        editableStudent: action.payload,
        studentName: action.payload.name
      }
    }
    case 'update_student':{
      return {
        ...state,
        students: state.students.map((student) => {
          if (student.id === state.editableStudent.id) {
            return {
            ...student,
            name: state.studentName,
            };
          }
          return student;
        }),
        editable: false,
        editableStudent: null,
        studentName: ''
      } 
    }
    
    case 'delete_student':{
      return {
        ...state,
        students: state.students.filter((s) => {
          return s.id !== action.payload;
        })
      }
    }
    case 'change_status_of_student': {
      return {
        ...state,
        students: state.students.map((s)=>{
          if(s.id === action.payload.id){
            return {...s, isPresent: action.payload.isPresent};
          }
          return s;
        })
      }
    }
    default: {
      return state;
    }
  }
}

const initialValue = {
  students: [],
  studentName: '',
  editable: false,
  editableStudent: null
}


const StudentProvider = ({ children }) => {
  const [studentState, dispatch] = useReducer(studentReducer,initialValue);

  const handleStudentName = (e)=>{
    dispatch({type: 'change_student_name', payload: e.target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!studentState.studentName) {
      return alert("You have to enter a student name");
    }
    !studentState.editable  
    ? dispatch({type: 'create_student'})  
    : dispatch({type: 'update_student'});
  };

  const makePresentHandler = (student) =>{
    if(student.isPresent !== undefined){
      return alert(`This student is already in the ${student.isPresent ? 'Present' : 'Absent' } list`)
    }
    dispatch({type:'change_status_of_student', payload: {id:student.id, isPresent: true}})
  }
  const makeAbsentHandler = (student) =>{
    if(student.isPresent !== undefined){
      return alert(`This student is already in the ${student.isPresent ? 'Present' : 'Absent' } list`)
    }
    dispatch({type:'change_status_of_student', payload: {id:student.id, isPresent: false}})
  }
  const handleToggle = (student)=>{
    dispatch({type:'change_status_of_student', payload:{id: student.id, isPresent: !student.isPresent}})
  }

  
  const StudentContextValue = {
    studentState,
    dispatch, 
    handleStudentName,
    handleFormSubmit,
    makePresentHandler,
    makeAbsentHandler,
    handleToggle
  };
  return (
    <StudentContext.Provider value={StudentContextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
