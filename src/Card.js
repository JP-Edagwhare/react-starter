import React from 'react'

export default function Card(props) {
    return (
        <div>
            <h2>{props.myProduct.Title}</h2>
            <p>{props.myProduct.Description}</p>
            <p>{props.myProduct.price}</p>
            <button onClick={props.myClick}>Add to Card</button>
        </div>
    )
}
