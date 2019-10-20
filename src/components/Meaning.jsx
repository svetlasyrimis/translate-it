import React from 'react'


export default function Meaning(props) {
  return (
    <div>
      {props.meaning.map(element => (
        <div key={element.meta.uuid}>
          <div>{element.shortdef.map(el => <div key={el}><li>{el}</li></div>)}</div>
        </div>
      ))}
    </div>
  )
}
