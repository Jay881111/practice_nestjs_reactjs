import React from 'react';
import { Link } from 'react-router-dom';

// 로그인 기능

function Main() {
  return (
    <div>
      <Link to="/students">학생목록</Link>
      <Link to="/process">과정진행도</Link>
      <Link to="/lectures">강의목록</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default Main;
