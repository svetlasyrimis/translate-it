import React from 'react'

export default function Form(props) {
  return (
    <div>
      <form action="get" onSubmit={props.getTranslation}>
        <h2>Choose a Source Language</h2>

        <select
          
          onChange={props.handleChange}
          value={props.sourceLanguage}
          name="sourceLanguage">

          <option
          
          >Pick a language</option>
          {
            Object.keys(props.languages).map((language) =>
              (<option
                key={language}
                value={props.languages[language]}>
                {language}
              </option>
              ))
          }
        </select>
        <h2>Choose a Source Language</h2>

        <select
          
          onChange={props.handleChange}
          value={props.targetLanguage}
          name="targetLanguage"
          >
          <option
           
            
          >Pick a language</option>
          {
            Object.keys(props.languages).map((language) =>
              (<option
                key={language}
              
                value={props.languages[language]}>
                {language}
              </option>
              ))
          }
        </select>

        <input type="text" onChange={props.handleChange} placeholder="type an word" name="string" />
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}
