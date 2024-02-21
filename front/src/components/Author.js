import axios from 'axios';
import React, { useMemo, useState } from 'react';

function Author() {
  const [data, newData] = useState([]);
  // const [individual, newIndividual] = useState('');
  const [author, newAuthor] = useState('');
  const [age, newAge] = useState('');
  // 이상하게 폼으로 묶으면..안되네

  // useEffect(() => {
  //   getPosts();
  //   // getSpecificPosts(1);
  // }, []);

  const getPosts = () => {
    axios
      .get('http://localhost:4000/posts')
      .then((data) => {
        console.log('data.data', data.data);
        newData(data.data);
      })
      .catch((error) => console.log('err', error));
  };
  useMemo(() => getPosts(), []);

  const dataList = data.map((a) => {
    return (
      <ul key={a.id}>
        <li>{a.author}</li>
        <li>{a.age}</li>
      </ul>
    );
  });

  // const getSpecificPosts = async (id) => {
  //   await axios
  //     .get(`http://localhost:4000/posts/${id}`)
  //     .then((data) => {
  //       console.log('specific', data.data);
  //       newIndividual(data.data);
  //     })
  //     .catch((error) => console.log('err', error));
  // };

  const onSave = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:4000/posts', { author: author, age: age })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <div>{dataList}</div>
      {/* <div>{individual.author}</div> */}
      {/* <div>{individual.age}</div> */}
      <input
        placeholder="author"
        type="text"
        name="author"
        value={author}
        onChange={(e) => newAuthor(e.currentTarget.value)}
      />
      <input
        placeholder="age"
        type="number"
        name="age"
        value={age}
        onChange={(e) => newAge(e.currentTarget.value)}
      />
      <button onClick={onSave}>send</button>
    </div>
  );
}

export default Author;
