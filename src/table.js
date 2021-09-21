import React, { useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <>
      <div>
        <strong>title</strong>
      </div>
      {data.map((d) => (
        <div key={d.userId}>
          <div>{d.title}</div>
        </div>
      ))}
    </>
  );
}
export default Table;
