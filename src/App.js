import React from 'react';
import './App.css';
import List from  './pages/List/List';
import Header from './pages/Header/Header';
import AddLink from "./pages/AddPage/Add";


function App() {

  return (

   
   <div className="App">

      <Header/>
      <hr/>

      <List/>
      <hr/>
      <AddLink/>

    </div>
  );
}

export default App;
