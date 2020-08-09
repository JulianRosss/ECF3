import React from 'react';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <footer className="bg-warning text-light text-center col-md-12">
        Copyright &copy; 2020
      </footer>
    </div>
  );
}

export default App;
