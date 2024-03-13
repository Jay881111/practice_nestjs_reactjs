import axios from 'axios';
import React, { useRef } from 'react';

function CreateLectures() {
  const titleInputRef = useRef();
  const authorInputRef = useRef();

  const createLecture = async (e) => {
    e.preventDefault();
    const title = titleInputRef.current.value;
    const author = authorInputRef.current.value;

    if (title && author) {
      await axios({
        method: 'post',
        url: 'http://localhost:4000/lectures/create',
        data: {
          author: author,
          title: title,
        },
      })
        .then(console.log('author :', author, ', title:', title))
        .catch((e) => console.log('error in signin', e));
    } else {
      throw new Error('강사명 혹은 강의명을 입력해주세요');
    }
  };

  return (
    <div>
      <form>
        <div>강의 만들기</div>
        <div>
          <span>강사명</span>
          <input
            placeholder="강사명을 입력해주세요"
            type="author"
            ref={authorInputRef}
          />
        </div>
        <div>
          <span>강의명</span>
          <input
            placeholder="강의명을 입력해주세요"
            type="title"
            ref={titleInputRef}
          />
        </div>

        <div>
          <span>강의url</span>
        </div>
        <button onClick={(author, title) => createLecture(author, title)}>
          강의등록
        </button>
      </form>
    </div>
  );
}

export default CreateLectures;
