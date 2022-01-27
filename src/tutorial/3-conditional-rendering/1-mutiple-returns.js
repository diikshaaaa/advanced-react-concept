import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        // A promise is something that will be either resolved or rejected at a later point in time (typically**). then is used to hook up a handler that will be called when the promise is resolved (and optionally when it's rejected, if you pass a second function into then; otherwise you'd use catch).
        if (resp.status >= 200 && resp.status <= 299) {
        // responses are the part of http request 
        // Successful responses ( 200 – 299 ) ,that is why here 200 and 299 is taken 
          return resp.json();
          // when we call the json() method, a Promise is returned 
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
          // statusText property returns a DOMString containing the response's status message 
          // When an error occurs, JavaScript will normally stop and generate an error message
          // throw an exception (throw an error)
          // exception signifies the presence of an abnormal condition which requires special operable techniques. 
        }
      })
      .then((user) => {
        const { login } = user;
        // login is an object from the url
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
  // if isLoading is true then show "Loading..." 
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
  // if isError is true then show "Error..."
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;