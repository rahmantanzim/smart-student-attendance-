import React, { useContext } from 'react'
import { StudentContext } from '../../contexts/Student';

const AbsentStudent = ({handleToggle}) => {
    const {students} = useContext(StudentContext)
  return (
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
  )
}

export default AbsentStudent