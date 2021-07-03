import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

import  RecordIt from './Record';
class App extends Component {
  render() {
    return (
       <Router>
              <li>
                <Link to="/">Home</Link></li>
            <Switch>
             <Route  path='/' component={RecordIt}></Route>
            </Switch>
       </Router>
   );
  }
}

export default App;
