import React from 'react';

export default function NamesList(props) {
  return (
    <props.listType>
      {
        props.listOfNames.map((row, index) =>
          <li key={index}>
            <p>{row}</p>
          </li>
        )
      }
    </props.listType>
  )
}
