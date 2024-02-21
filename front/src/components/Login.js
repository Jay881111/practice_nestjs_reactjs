import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPw] = useState('');

  const loginWithEmail = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:4000/auth/login/email', {
        userId: userId,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log('error', e));

    console.log('id', userId, 'password', password);
  };
  return (
    <div>
      <div>
        <h3>회원정보를 입력해주세요</h3>
        <div>
          <span>ID</span>
          <input
            type="text"
            value={userId}
            placeholder="id"
            name="id"
            onChange={(e) => setUserId(e.currentTarget.value)}
          />
        </div>
        <div>
          <span>PASSWORD</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPw(e.currentTarget.value)}
            placeholder="password"
            name="password"
          />
        </div>
        <button onClick={loginWithEmail}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
