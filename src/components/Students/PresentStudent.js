import React, { useContext } from 'react'
import { StudentContext } from '../../contexts/Student';

const PresentStudent = () => {
  const {studentState,handleToggle} = useContext(StudentContext);
  return (
    <div><div className="student-present">
        <h2>Present Students</h2>
        <ul>
          {studentState.students
            .filter((student) => {
              return student.isPresent === true;
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
      </div></div>
  )
}

export default PresentStudent