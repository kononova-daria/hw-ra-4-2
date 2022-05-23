import React, {useState} from 'react';
import Form from './Form';
import List from './List';
import {nanoid} from 'nanoid';

function AccountingWalks() {
  const [list, setWalk] = useState([]);
  
  const handlerAddWalk = (data) => {
    const dateIndex = list.findIndex((item) => item.date === data.date);
    if (dateIndex !== -1) {
      list[dateIndex].distance = Number(list[dateIndex].distance) + Number(data.distance);
      setWalk((prev) => prev.map((step) => step));
    } else {
      setWalk((prev) => [...prev, {...data, id: nanoid()}]);
    }
  };

  const handlerDelWalk = (id) => {
    setWalk(() => list.filter((item) => item.id !== id));
  };

  return (
    <div className="main-page">
      <div className="container">
        <Form onAddWalk={handlerAddWalk}/>
        <List items={list} onDelWalk={handlerDelWalk}/>
      </div>
    </div>
  );
}
  
export default AccountingWalks;