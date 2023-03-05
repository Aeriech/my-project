import './App.css';
import Body from './Componets/Body';
import Header from './Componets/Header';
import React, {Suspense, useState} from 'react';


function App() {

const [show,setShow] = useState(false);

//  const showBody = () =>{
//   if (show == true) {
//     setShow(false)
//   } else {
//     setShow(true)
//   }
//  }

  return (
    <div>
    <Header/>
    <main>
      {/* <button
      onClick={showBody}>START</button>
      {
      show &&  */}
      <Body/>
      {/* } */}
    </main>
    </div>
  );
}

export default App;
