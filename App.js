import Counter from './components/Counter';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
 const[count,setCount]=useState(0)
 const[count2,setCount2]=useState(0)

 useEffect(()=>{
  console.log('mounting...')
  console.log('updating count 1..'+count)
  console.log('updating count 2..'+count2)

  return()=>{
    console.log('clean up'+count)
  }

 },[count,count2])

  return (
    <>
    <button onClick={()=>setCount(count+1)} >increment</button>
    <h1>i m comp 1: {count}</h1>

    <button onClick={()=>setCount2(count2+1)} >increment</button>
    <h1>i m comp 2: {count2}</h1>
    </>
    
  );
}

export default App;
