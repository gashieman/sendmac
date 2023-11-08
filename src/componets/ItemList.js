// ItemList.js
import React from 'react';

function ItemList({ items }) {
  return (
    <div className="items-list">
      {items.map((item, index) => (
        <div className="item" key={index}>
          <h3>{item.name}</h3>
          <img src={item.imageLink} alt={item.name} />
          <hr />
          <p>Description: {item.description}</p>
          <hr />
          <p>Category: {item.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
