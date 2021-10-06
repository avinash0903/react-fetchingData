import React, { useState, useEffect } from 'react';
import './style.css';

function Table(props) {
  const adduserhandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={adduserhandler}>
        <label>name</label>
        <input id="username" />
        <label>age</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
export default Table;
