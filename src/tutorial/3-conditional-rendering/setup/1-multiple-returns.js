import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');


  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        //Error is Only Network Error
        console.log(`error`, error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>
      <h1>Loading...</h1>
    </div>;
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
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
