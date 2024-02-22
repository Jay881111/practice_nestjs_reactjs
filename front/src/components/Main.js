import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
// 로그인 기능

function Main() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const cookies = new Cookies();
    const codedCookie = cookies.cookies.jwt_authorization;
    const decoded = jwtDecode(codedCookie);
    setUser(decoded);
  }, []);

  return (
    <div>
      {user ? <div>안녕하세요, {user.email}</div> : null}

      <Link to="/students">학생목록</Link>
      <Link to="/process">과정진행도</Link>
      <Link to="/lectures">강의목록</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default Main;
