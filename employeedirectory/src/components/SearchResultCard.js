import React from "react";

//Defining functional component
export default function SearchResultCard(props)
{
    return (
        <tbody>
                <tr><img alt={props.firstName} src={props.thumbnail} />
                    <th scope="col"><strong>Name:</strong> {`${props.firstName} ${props.lastName}`}</th>
                    <th scope="col"><strong>Phone:</strong> {props.phone}</th>
                    <th scope="col"><strong>Email:</strong> {props.email}</th>
                </tr>
        </tbody>
  )
}