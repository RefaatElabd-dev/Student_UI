import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Student  from './Containers/students/student';
import './App.css';
import CreateStudent from './Containers/students/createStudent';
import {Nav} from './components/nav';

class App extends Component
{
  constructor(props){
    super(props);

    this.state = {
      "pathName":"/"
    };

    this.notifyPathName = this.notifyPathName.bind(this);
  }

  notifyPathName(pathName) {
      this.setState({
        pathName: pathName
      });
    }

  render()
  {
    return <Router>
      <div className="App">
        <Nav
          notifyPathName={this.notifyPathName}
          pathName={this.state.pathName}
        />
          <Routes>
            <Route
              path="/"
              exact
              element={<Student />}
              />
            <Route
              path="/create"
              exact
              element={<CreateStudent />}
              />
            <Route
              path="/edit/:id"
              exact
              element ={<CreateStudent />}
              />
          </Routes>
        </div>
      </Router>
  }
}

export default App;
