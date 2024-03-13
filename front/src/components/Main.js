import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import UserDetail from './UserDetail';
// 로그인 기능

function Main() {
  const [user, setUser] = useState(null);
  // const [cookies, setCookies] = useState(new Cookies());

  const cookies = new Cookies();
  // cookies가 없을 경우 때문에 에러 나는중

  const token = cookies.cookies.jwt_authorization;

  useEffect(() => {
    if (typeof token !== 'string') {
      // throw new InvalidTokenError('토큰이 틀린형식입니다');
    } else if (!token) {
      // throw new InvalidTokenError('토큰이 없습니다');
    } else {
      const codedCookie = cookies.cookies.jwt_authorization;
      const decoded = jwtDecode(codedCookie);
      setUser(decoded);
    }
  }, []);

  const logOut = () => {
    setUser(null);
    cookies.remove('jwt_authorization');
  };

  return (
    <div>
      {user ? (
        <div>
          <div>
            안녕하세요, {user.email}
            <Link to="/userdetail">내정보</Link>
          </div>

          <button onClick={logOut}>logout</button>
        </div>
      ) : (
        <span>
          <Link to="/signup">회원가입</Link>
          <Link to="/login">로그인</Link>
        </span>
      )}
      <div>
        <Link to="/students">학생목록</Link>
      </div>
      <div>
        <Link to="/process">과정진행도</Link>
      </div>
      <div>
        <Link to="/lectures">강의목록</Link>
      </div>
      <Link to="/createlectures">강의만들기</Link>
    </div>
  );
}

export default Main;
