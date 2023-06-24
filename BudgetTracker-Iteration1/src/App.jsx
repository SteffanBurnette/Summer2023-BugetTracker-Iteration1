import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//List of purchase history
const purchaseHistory=[
  {date:"1/5/23",
   amount:15.90,
   vendor:"Amazon",
   item:"Speaker"
},
{date:"1/8/23",
   amount:70.90,
   vendor:"Apple",
   item:"Bottle of Water"
},
{date:"1/13/23",
   amount:80,
   vendor:"Best Buy",
   item:"Ps5 Controller"
},

];

export function Transactions({count, onClick}){


  return(
    <div>  
    <p> Date Purchased: 
      {purchaseHistory[count].date} </p>

      <p> Amount Spent: 
      {purchaseHistory[count].amount} </p>

      <p> Purchased From: 
      {purchaseHistory[count].vendor} </p>

      <p> Item Purchased: 
      {purchaseHistory[count].item}
     </p>
     
     <button onClick={onClick}>
      Next Transaction
     </button>
     </div>
   

  );

}


export default function BudgetTracker(){

  const[count,setCount]=useState(0);

  function handleClick(){
    //I used the length-1 to allow the user to loop through the statements
    //Since count also controls the array index i cant make it go to the array
    //length and then get set to zero since there will be no value for it to pull.
    //So I make it get set to zero once it becomes the last element in the array.This allows
    //for the loop through financial statements
    count<purchaseHistory.length-1 ? setCount(count+1):setCount(0)
    //setCount(count+1);
  }

  //Calls the transactions() function which takes two props: the count variable and the handlClick function.
  return(

    <div> 
      <h1>Transaction History</h1>
       
      <Transactions count={count} onClick={handleClick} />
      
    </div>
  );

}







/*
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
*/