import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
      Name: '',
      Employee_id: '',
      Project_Name: ''
    };
    this.handlechange = this.handlechange.bind(this);
  }
  handlechange(event) {
    this.setState({
      values: event.target.value,
    });

  }
  button() {
    let data = {
      command: this.state.values
    }
    console.log("request send", data);
    axios.post('http://localhost:5000/backend', data)
      .then(resp => {
        console.log("Response came", resp);
        this.setState({
          Name: resp.data.Value.Name,
          Employee_id: resp.data.Value.Empid,
          Project_Name: resp.data.Value.Project,
        })
        //console.log("Response came",this.state.Name);
      })

  }
  render() {
    console.log("values are..", this.state.values);
    return (
      <div>
        <div className="App">
          <b>Choose the name</b>:<select id="name" onChange={this.handlechange}>
            <option value="default">Select the name</option>
            <option value="Dinesh">Dinesh</option>
            <option value="Ashik">Ashik</option>
            <option value="Akhil">Akhil</option>
          </select>
          <button type="button" onClick={() => this.button()}>Submit</button>
        </div>
        <div className="output">
          <b>Employee name:{this.state.Name}</b><br/>
          <b>Employee id:{this.state.Employee_id}</b><br/>
          <b>Project Name:{this.state.Project_Name}</b><br/>
        </div>
      </div>
    );
  }
}

export default App;
