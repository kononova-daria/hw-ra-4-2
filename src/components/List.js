import React from 'react';

function List({items, onDelWalk}) {

  const data = items.map((item) => {
    const date = item.date.split('-');
    const timestamp = (new Date(date[0], date[1] - 1, date[2])).getTime();
    return {...item, timestamp};
  });

  const sortedData = data.sort((a, b) => b.timestamp - a.timestamp);

  const handlerDeleteWalk = (id) => () => onDelWalk(id);

  return (
    <div className="list-container">
      <ul className="list">
        {sortedData.map((item) => <li key={item.id} className="list-item">
            <div>{item.date}</div>
            <div>{item.distance}</div>
            <div>
              <button className="btn del-btn" type="button" onClick={handlerDeleteWalk(item.id)}>X</button>
            </div>
        </li>)}
      </ul>
    </div>
  );
}
  
export default List;