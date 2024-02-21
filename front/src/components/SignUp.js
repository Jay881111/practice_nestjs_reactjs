import React, { useRef } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs-react';

function SignUp() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const createAccount = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const hashedPassword = bcrypt.hashSync(password, 10);

    console.log('id', email, 'password', hashedPassword);

    await axios
      .post('http://localhost:4000/users/signUp', {
        userId: email,
        password: hashedPassword,
      })
      .then((response) => {
        console.log(response);
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
