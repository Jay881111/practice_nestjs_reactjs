import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [userId, setUserId] = useState('');
  const [password, setPw] = useState('');

  const signIn = async (e) => {
    console.log('id', userId, 'password', password);
    e.preventDefault();
    await axios
      .post('http://localhost:4000/users/signUp', {
        userId: userId,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <div>
        <h3>회원가입 페이지</h3>
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
        <button onClick={signIn}>회원가입 페이지</button>
      </div>
    </div>
  );
}

export default SignUp;
