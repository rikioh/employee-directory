import React from "react";

//Defining functional component
export default function SearchResultCard(props)
{
    return (
    <div className="card">
        <div className="img-container">
            <img alt={props.firstName} src={props.thumbnail} />
        </div>
        <div className="content">
            <ul>
            <li>
                <strong>Name:</strong> {`${props.firstName} ${props.lastName}`}
            </li>
            <li>
                <strong>Phone:</strong> {props.phone}
            </li>
            <li>
                <strong>Email:</strong> {props.email}
            </li>
            </ul>
        </div>
    </div>
  )
}