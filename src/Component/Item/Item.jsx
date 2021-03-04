import React from "react";

function Item(props) {
    const id = props.id;
    return (
        <div className="item">
              <h3>{props.name}</h3>
              <img src={props.src} alt=""/>
              <p>{props.year}</p>
              <button>Посмотреть</button>
        </div>
    )
}

export default Item;