import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'  element={< Home />} />
          <Route path='/login'  element={< LogIn />} />
          <Route path='/signup'  element={< SignUp />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
