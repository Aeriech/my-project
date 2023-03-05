import React, { useState } from 'react'
import Link from '@mui/material/Link';
import { Calculate } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { color } from '@mui/system';




function Body() {
    const setStyle = {
        color: 'white',
        backgroundColor: 'blue',
        fontSize: 20,
        height: 50,
        width: 180,
    };

    const [name,setShowName] = useState(false);

    const showName = () =>{
     if (name == true) {
       setShowName(false);
     } else {
       setShowName(true);
     }
    }

    const [diary,setShowDiary] = useState(false);

    const showDiary = () =>{
     if (diary == true) {
       setShowDiary(false);
     } else {
       setShowDiary(true);
     }
    }
    
    const [num,setShowNum] = useState(false);

    const showNum = () =>{
     if (num == true) {
       setShowNum(false);
     } else {
       setShowNum(true);
     }
    }

    const [cal,setShowCal] = useState(false);

    const showCal = () =>{
     if (cal == true) {
       setShowCal(false);
     } else {
       setShowCal(true);
     }
    }

    const [mdas,setShowMDAS] = useState(false);

    const showMDAS = () =>{
     if (mdas == true) {
       setShowMDAS(false);
     } else {
       setShowMDAS(true);
     }
    }

    const [plus,setShowPlus] = useState(false);

    const showPlus = () =>{
     if (plus == true) {
       setShowPlus(false);
     } else {
       setShowPlus(true);
     }
    }

    const [door,setShowDoor] = useState(false);

    const showDoor = () =>{
     if (door == true) {
       setShowDoor(false);
     } else {
       setShowDoor(true);
     }
    }

    const [you,setShowYou] = useState(false);

    const showYou = () =>{
     if (you == true) {
       setShowYou(false);
     } else {
       setShowYou(true);
     }
    }

  return (
    
    <>
    <p></p>
    <button onClick={showName} style={setStyle}>NAME</button>
    { name && <Name/> }
    <p></p>
    
    <p></p>
    <button onClick={showDiary} style={setStyle}>DIARY</button>
    { diary && <Diary/> }
    <p></p>
    
    <p></p>
    <button onClick={showNum} style={setStyle}>NUMBER</button>
    { num && <Number/> }
    <p></p> 

    <p></p>
    <button onClick={showCal} style={setStyle}>CALCULATOR</button>
    { cal && <Calculator/> }
    <p></p> 

    <p></p>
    <button onClick={showMDAS} style={setStyle}>MDAS</button>
    { mdas && <MDAS/> }
    <p></p> 

    <p></p>
    <button onClick={showPlus} style={setStyle} >PLUS</button>
    { plus && <PLUS/> }
    <p></p> 

    <p></p>
    <button onClick={showDoor} style={setStyle}>DOOR</button>
    { door && <Door/> }
    <p></p> 

    <p></p>
    <button onClick={showYou} style={setStyle}>YOUTUBE</button>
    { you && <Youtube/> }
    <p></p>
    </>
  )
}

export default Body



{/*Event handling using const with parameter*/}
function PLUS() { 
const Plus = (num) => {
    setN1((n1) => n1 + num);
    
}
const[n1, setN1] = useState(0);
return(
    <>
    <h1>
        {n1}
    </h1>
    <button
    onClick={(e) => Plus(10)}
    >
        Add 10
    </button>
    <p></p>
    </>
)
}

{/*Adding word to paragraph by clicking button without changing whole paragraph*/}
function Diary() { 
    function MyDiary() {
        setNum((num) => num+1);
        setDiary((diary) => `${diary} [Day-${num}] ${set}`);

    }
    const[diary, setDiary] = useState('Diary: ');
    const[set, setter] = useState('');
    const[num, setNum] = useState(1);
    return(
        <>
        <p></p>
        <textarea
        className='area'
        onChange={(e) => setter(e.target.value)}
        placeholder='My Diary'
        >
        </textarea>
        <br></br>
        <button
        onClick={MyDiary}
        >
            Add To Diary
        </button>
        <p>
            {diary}
        </p>
        </>
    )
}


{/*Increase or Decrease number with button click*/}
function Number() {
    const [count, setCount] = useState (0);
    const [pn, setPN] = useState ('');

    const PN = (e) => {
        if (e == 'a') {
            setCount((count) => count+1)
        } else {
            setCount((count) => count-1)
        }
        if (count == 0) {
            setPN('');
        } 
        else if (count >= 1) {
            setPN('POSITIVE');
        }
        else {
            setPN('NEGATIVE');
        }
    }
    return(
        <>
        <h1>
            {pn} {count}
        </h1>

        <button
            onClick={() => PN('a')}
        >
            Increase
        </button>

        <button
            onClick={() => PN('m')}
        >
            Decrease
        </button>

    </>
    )
}

{/*Changing Value of h1 using onchange in textarea*/}
function Name() {
    const [name, setName] = useState ('');
    
    return(
        <>
        <p></p>
            <img src='https://i.pinimg.com/originals/f5/ba/af/f5baaf7078815a6f8a073de8bc1255aa.jpg' className='image'></img>
             <h1>
                My Name is {name}
            </h1>
            <textarea placeholder='Your Name' 
                onChange={(e) => setName(e.target.value)}>
            </textarea>
        </>
    )
}

{/*Opening links with click*/}
function Youtube() {
    return(
        <>
            <p>Click Image To Open Link</p>
            <Link href="https://www.youtube.com/">
                <img onClick={<Link href="https://www.youtube.com/"></Link>} src="https://blog.ambient-mixer.com/wp-content/uploads/2016/01/How-YouTube-Is-Replacing-Live-Music-Spots-Ambient-Mixer.png"/>
            </Link>
                <br></br>
            <Link href="https://www.youtube.com/">
                <button>Or Click Here To Open YouTube</button>
            </Link>
        </>
    )
}

function Mul({Num1, Num2}) {
    
    return(
        <>
        <h1>
         Multiplication:  {Num1} x {Num2} = {Num1 * Num2}
        </h1>
        </>
    )
    
}

function Div({Num1, Num2}) {
    const DivStyle = {
        color: "blue"
    }
    return(
        <>
        <h1 
        style={DivStyle}
        >
         Division:  {Num1} / {Num2} = {Num1 / Num2}
        </h1>
        </>
    )
    
}

function Sub({Num1, Num2}) {
    const Style = {
        color: "orange"
    }
    return(
        <>
        <h1
        style={Style}
        >
          Subtraction: {Num1} - {Num2} = {Num1 - Num2}
        </h1>
        </>
    )
    
}

function Add({Num1, Num2}) {
    const Style = {
        color: "gray"
    }
    return(
        <>
        <h1
        style={Style}
        >
          Addition: {Num1} + {Num2} = {parseInt(Num1)+ parseInt(Num2)}
        </h1>
        </>
    )
    
}
{/*Computing MDAS with onchange and styling each MDAS*/}
function MDAS() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    return(
        <>
        <p>Enter Number Here</p>
        <textarea 
        placeholder='First Number' 
        onChange={(e) => setNum1(e.target.value)}
        ></textarea>

        <textarea 
        placeholder='Second Number' 
        onChange={(e) => setNum2(e.target.value)}
        ></textarea>

        <Mul Num1={num1} Num2={num2}/>
        <Div Num1={num1} Num2={num2}/>
        <Sub Num1={num1} Num2={num2}/>
        <Add Num1={num1} Num2={num2}/>

        </>
    )
    
}

{/*Changing text and Image with button click*/}
function Door() {
    const [door, setDoor] = useState ('Close');
    const [OP, setOP] = useState ('https://cdn0.iconfinder.com/data/icons/ie_Financial_set/256/10.png');
    const styleObj = {
        fontSize: 50,
        color: "Red"
    }
    function CloseDoor() {
        setOP('https://cdn0.iconfinder.com/data/icons/ie_Financial_set/256/10.png');
        setDoor('Close');
    }

    function OpenDoor() {
        setOP ('https://pngimg.com/uploads/door/door_PNG17561.png');
        setDoor('Open');
    }
    return(
        <>
        <p></p>
        <img src={OP}></img>
        <p style={styleObj}>{door}</p>

        <button
        onClick={OpenDoor}
        >
            Open
        </button>

        <button
        onClick={CloseDoor}
        >
            Close
        </button>
        </>
    )

}

{/*Calculate number using else if condition*/}
function Calculator() {
    const Calcu = (n1,n2, operator) =>{
        if (operator === "add") {
            setNum1(parseInt(n1) + parseInt(n2));
            
        }
        else if(operator === "sub") {
            setNum1(parseInt(n1) - parseInt(n2));
            
        }
        else if(operator === "mul") {
            setNum1(parseInt(n1) * parseInt(n2));
            
        }
         else {
            setNum1(parseInt(n1) / parseInt(n2));
        }
    }
    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    const[num3, setNum3] = useState(0);
    return(
        <>
        <h1>
            Result: {num1}
        </h1>
        <textarea
        placeholder='1st Num'
        onChange={(e) => setNum2(e.target.value)}
        >

        </textarea>

        <textarea
        placeholder='2nd Num'
        onChange={(e) => setNum3(e.target.value)}
        >

        </textarea>
        <p></p>

        <button
        onClick={(e) => Calcu(num2, num3, "mul")}>
        Mul
        </button>

        <button
        onClick={(e) => Calcu(num2, num3, "div")}>
        Div
        </button>

        <button
        onClick={(e) => Calcu(num2, num3, "add")}>
        Add
        </button>

        <button
        onClick={(e) => Calcu(num2, num3, "sub")}>
        Sub
        </button>
        </>
    )
}