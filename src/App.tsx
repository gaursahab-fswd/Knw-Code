import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Logout from './Pages/Logout';

function App() {
const user  = useSelector(selectUser);
  return (
    <div className="App">
      {/* <div>{user? <Logout/>: <LogIn/>}</div> */}
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
