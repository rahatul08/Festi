import React from 'react';
import './App.css';
import Routes from "./Routes/Routes";
import Header from "./components/header.component/header.component";
function App() {

  return (
    <div className="App">
        <Header/>
            <Routes/>
    </div>
  );
}

export default App;
