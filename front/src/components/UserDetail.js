import React, { useRef } from 'react';

import ExtractToken from './ExtractToken';

const UserDetail = () => {
  const userNameInputRef = useRef();

  const user = ExtractToken();
  console.log('user', user);

  const modifyName = (e) => {
    e.preventDefault();
    const userName = userNameInputRef.current.value;
    user.userName = userName;
    console.log(user);
  };

  return (
    <div>
      <div>상세페이지</div>
      <div>ID: {user ? user.email : null}</div>
      <div>이름:{user?.userName}</div>
      <input placeholder="이름수정하기" ref={userNameInputRef} />
      <button onClick={(userNameInputRef) => modifyName(userNameInputRef)}>
        수정
      </button>
      <div>나이:</div>
      <div>:</div>
    </div>
  );
};

export default UserDetail;
