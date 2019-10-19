import React from 'react';
import './App.css';
import { translate } from './services/api-helper';
import Form from './components/Form'
import Translation from './components/Translation'



class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      string: '',
      translation: ''
    }
  }


  handleChange = (event) => {
    this.setState({
      string: event.target.value
    });

  }
  getTranslation = async (e) => {
    e.preventDefault();
    const translation = await translate(this.state.string)
    this.setState({
      translation
    })
  }
  render() {
    return (
      <div className="App">
        <Form getTranslation={this.getTranslation} string={this.state.string} handleChange={this.handleChange} />
        <Translation translation={this.state.translation}/>
      </div>
    );
  }
}

export default App;
