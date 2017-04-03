import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Hobbies from './Hobbies';
import Media from './Media';
import Nav from './Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
              <Nav />
          </header>
          <main className="container">
            <Route exact path="/" component={About}/>
            <Route path="/hobbies" component={Hobbies}/>
            <Route path="/media" component={Media}/>
          </main>
        </div>

      </Router>

    );

  }

}

export default App;
