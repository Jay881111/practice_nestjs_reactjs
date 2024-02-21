import axios from 'axios';
import React, { useState } from 'react';

function Students() {
  const [student, setStudent] = useState([]);

  useState(() => {
    axios.get('http://localhost:4000/students').then((res) => {
      console.log(res.data);
      setStudent(res.data);
    });
  }, []);

  const mappedStudent = student.map((abc) => {
    return (
      <tr key={abc.id}>
        <td>{abc.name}</td>
        <td>{abc.age}</td>
        <td>{abc.process}%</td>
      </tr>
    );
  });

  return (
    <div>
      <div>학생목록</div>
      <table>
        <thead>
          <tr>
            <th>학생 이름</th>
            <th>학생 나이</th>
            <th>과정 진행도</th>
          </tr>
        </thead>
        <tbody>{mappedStudent}</tbody>
      </table>
    </div>
  );
}

export default Students;
