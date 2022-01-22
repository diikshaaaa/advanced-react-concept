import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  //async and await make promises easier to write
  //async makes a function return a Promise
  //await makes a function wait for a Promise
  // promise is an object that may produce a single value some time in the future
  };

  // you cannot use async, await inside useEffect like:
  // useEffect(async () => {
  //          .....
  // })
  // because async, await returns promises and useEffect cannot return a promise 
  // so you can either create async in separate function like we did here or inside the callback function of useEffect


    useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;