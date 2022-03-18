import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import Homepage from './pages/Homepage';
import Comments from './pages/Comments';
import Specific from './pages/Specific';
import General from './pages/General';
// import Start from './pages/Start';

function App() {
  const [theRequest, settheRequest] = useState([]);
  const [data, setData] = useState([]);
  return (
    
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <Homepage data={data} settheRequest={settheRequest}/>
          </Route>

          <Route path="/specific">
            <Specific theRequest={theRequest}/>
          </Route>

          <Route path="/comments">
            <Comments/>
          </Route>
          
          <Route path="/general">
            <General/>
          </Route>
        </div> 
        </Router>
  );
}

export default App;