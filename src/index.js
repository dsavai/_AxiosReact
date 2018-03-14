import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      persons: []
    }
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(respond =>{
        const persons = respond.data;
        this.setState({
          persons
        })
      })
  }

  render(){
    return(
      <div>
        <h1>Lists</h1>
        <div>
          <ul>{this.state.persons.map((person, i) => <Messages key={i} message={person} /> )}</ul>
        </div>
      </div>
    )
  }
}

class Messages extends React.Component{
  render(){
    const listStyle = {
      marginBottom: 20
    }
    const nameStyle = {
      fontWeight: 900,
      fontSize: 20
    }
    return(
      <div>
        <li style={listStyle}>
          <div style={nameStyle}>{this.props.message.name}</div>
          <div>{this.props.message.email}</div>
        </li>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
