import React from 'react';
import './App.css';
import { translate, getLangs, test } from './services/api-helper';
import Form from './components/Form'
import Translation from './components/Translation'
import Meaning from './components/Meaning'


class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      translation: '',
      formData: {
        string: '',
        sourceLanguage: '',
        targetLanguage: '',
      },
      meaning:''
    }
  }


  async componentDidMount() {
    const response = await getLangs();
    const languages = response.langs
    const longNames = Object.values(languages)
    const shortNames = Object.keys(languages)
    const newLanguages = this.swap(languages)
    
    this.setState({
      languages:newLanguages,
      longNames,
      shortNames
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }
  swap = (object) => {
    let newObj = {}
    for (let key in object) {
       newObj[object[key]] = key
    }
    return newObj
  }


  getTranslation = async (e) => {
    const { string, sourceLanguage, targetLanguage } = this.state.formData;
    e.preventDefault();
   
    const translation = await translate(string,sourceLanguage,targetLanguage)
    this.setState({
      translation
    })
    // if (this.state.sourceLanguage === "en") {
    //   this.getMeaning(string) 
    // } else if (this.state.targetLanguage === "en"){
    //   this.getMeaning(translation)
    // }
  }

  getMeaning = async (string) => {
    const response = await test(string)
    
    this.setState({
      meaning: response
    })
  }

  
  render() {
  
    return (
      <div className="App">
        {this.state.languages && 
          <Form
          getTranslation={this.getTranslation}
          string={this.state.formData.string}
          handleChange={this.handleChange}
          handleDropChange={this.handleDropChange}
          languages={this.state.languages}
          shortNames={this.state.shortNames}
          longNames={this.state.longNames}
          sourceLanguage={this.state.formData.sourceLanguage}
          targetLanguage={this.state.formData.targetLanguage}/>}
        <Translation translation={this.state.translation} />
        {this.state.meaning && <Meaning meaning={this.state.meaning} /> }
      </div>
    );
  }
}

export default App;
