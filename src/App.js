import './App.css';
import Body from './Componets/Body';
import Header from './Componets/Header';
import React, {Suspense, useState} from 'react';


function App() {

const [show,setShow] = useState(false);


  return (
    <div>
    <Header/>
    </div>
  );
}

export default App;
