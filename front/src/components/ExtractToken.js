import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

function ExtractToken() {
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
  return user;
}

export default ExtractToken;
