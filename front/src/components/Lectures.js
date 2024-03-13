import axios from 'axios';
import React, { useEffect, useState } from 'react';

// 강의 상세페이지 만들기(강의 내용 클릭했을때 더 자세히)
//

function Lectures() {
  const [lecture, setLecture] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/lectures/all').then((res) => {
      console.log(res.data);
      setLecture(res.data);
    });
  }, []);

  const mappedLecture = lecture.map((abc) => {
    return (
      <tr key={abc.id}>
        <td>강사명: {abc.author}</td>
        <td>강의명: {abc.title}</td>
      </tr>
    );
  });

  return (
    <div>
      <div>강의목록</div>
      <div>{mappedLecture}</div>
    </div>
  );
}

export default Lectures;
