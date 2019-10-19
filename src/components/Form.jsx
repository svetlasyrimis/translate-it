import React from 'react'

export default function Form(props) {
  return (
    <div>
      <form action="get" onSubmit={props.getTranslation}>
        <input type="text" onChange={props.handleChange} placeholder="type an word" />
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}
