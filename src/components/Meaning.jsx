import React from 'react'


export default function Meaning(props) {
  return (
    <div>
      {props.meaning.map(element => (
        <div key={element.meta.uuid}>
          <p>{element.shortdef.map(el => <p>{el}</p>)}</p>
        </div>
      ))}
    </div>
  )
}
