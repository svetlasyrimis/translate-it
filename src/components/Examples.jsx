import React from 'react';
import uuidv4 from 'uuid/v4';


export default function Examples(props) {
  return (
    <div>
      {props.examples.map(example => (<div key={uuidv4()}>
        <p>{example.src.length < 500 && example.src}</p>
        <p>{example.dst.length < 500 && example.dst}</p>
        <hr />
      </div>))}
    </div>
  )
}
