import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

function SignUp() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const createAccount = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    await axios({
      method: 'post',
      url: 'http://localhost:4000/auth/register/email',
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response);
        console.log(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        console.log('decoded', decoded);
        cookies.set('jwt_authorization', response.data.accessToken, {
          expires: new Date(decoded.exp * 1000),
        });
        navigate('/');
      })
      .catch((e) => console.log('error in signin', e));
  };

  return (
    <div>
      <form>
        <h3>회원가입 페이지</h3>
        <div>
          <span>ID</span>
          <input
            type="text"
            // value={userId}
            placeholder="email"
            ref={emailInputRef}
            // onChange={(e) => setUserId(e.currentTarget.value)}
          />
        </div>
        <div>
          <span>PASSWORD</span>
          <input
            type="password"
            ref={passwordInputRef}
            placeholder="password"

            // onChange={(e) => setPw(e.currentTarget.value)}
          />
        </div>
        <button onClick={(e) => createAccount(e)}>회원가입 페이지</button>
      </form>
    </div>
  );
}

export default SignUp;
