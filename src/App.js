// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import EventList from './components/EventList';
import Eventform from './components/Eventform';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
// import Signup from './components/Signup'; // Comment this out if not needed
import './App.css';  // Import the App.css file

function App() {
  return (
    <AuthProvider>
      <Router basename="/clist">
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/login" element={<Login />} />
              {/* <Route path="/signup" element={<Signup />} /> */}
              <Route
                path="/"
                element={
                  <PrivateRoute element={() => (
                    <>
                      <Eventform />
                      <EventList />
                    </>
                  )} />
                }
              />
            </Routes>
          </header>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
