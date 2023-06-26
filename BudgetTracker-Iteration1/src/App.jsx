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
   amount:70.95,
   vendor:"Apple",
   item:"Bottle of Water"
},
{date:"1/13/23",
   amount:80,
   vendor:"Best Buy",
   item:"Ps5 Controller"
},

];
//List of info that the user needs to fill out
const budget=[{
  monthlyPay:null ,
  specificedBudget: null,
  monthlyExpenses: null,
}];

/*export function userBudget(){




return(

  <div>  
  <input type="text"  placeholder="Enter your monthly pay."> </input>

  </div>
  
);


}*/
/*
export function UserTransactionForm(){

  function handleSubmits(e){
    purchaseHistory.date.push(e.target.value);
    purchaseHistory.amount.push(e.target.value);
    purchaseHistory.vendor.push(e.target.value);
    purchaseHistory.item.push(e.target.value);

  }


  return(
    <div>
    <form onSubmit={handleSubmits}>
   <div>
     <label htmlFor="name">Name:</label>
     <input type="datetime-local" placeholder="Enter the date of the transaction."/>
     <input type="text" placeholder="Enter the amount spent."/>
     <input type="text" placeholder="Enter the name of the vendor."/>
     <input type="text" placeholder="Enter the items name."/>
   </div>
   <button type="submit">Submit</button>
 </form>
 </div>

  );
}
*/


export function RemoveTransaction(){

  function handleSubmit(event){ 
    event.preventDefault();
   //Creates a form object that retrives the input values
   const formData = new FormData(event.target);

   //Creates an object and sets the user values into it

   //Gets the item that the user wants removed
  const itemToRemove = formData.get('item');
  
  //Creates a list with the item that the user wanted removed removed
  const updatedHistory = purchaseHistory.filter((transaction) => transaction.item !== itemToRemove);

  //Sets the length of purchaseHistory to zerp and pushes the updated array to it
  //Need to work on a way to have the user remove an element without mutating the original array
  purchaseHistory.length = 0;
  Array.prototype.push.apply(purchaseHistory, updatedHistory);
  //const updatedHistory = purchaseHistory.filter((transaction) => transaction.item !== itemToRemove);

  }


  return(

    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">Item Purchased:</label>
          <input type="text" id="item" name="item" placeholder="Enter item to remove" 
          required />
        </div>
        <button type="submit">Remove</button>
        </form>
    </div>    



  );
}


//Function used to update transactions list
export function UserTransactionForm() {

  //Function used to handle users inputs
  function handleSubmits(event){
    //Stops the page from refreshing when submit is clicked
    event.preventDefault();

    //Creates a form object that retrives the input values
    const formData = new FormData(event.target);
    //Creates an object and sets the user values into it
    //Specifically gets the users inputs by their id's
    const transaction = {
      //Inputs the userinputted data into the objects keys.
      date: formData.get('date'),
      amount: parseFloat(formData.get('amount')),
      vendor: formData.get('vendor'),
      item: formData.get('item')
    };
    //Adds the objects with the users values to the list/array
    purchaseHistory.push(transaction);
    //Outputs the updated list
    console.log('Updated purchase history:', purchaseHistory);


    //Resets the form after taking in all the info so that the user can fill out another for if they want to
    event.target.reset();   
  }

  return (
    <div>
      <form onSubmit={handleSubmits}>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div>
          <label htmlFor="amount">Amount Spent:</label>
          <input type="number" id="amount" name="amount" placeholder="Enter the amount spent" required />
        </div>
        <div>
          <label htmlFor="vendor">Vendor:</label>
          <input type="text" id="vendor" name="vendor" placeholder="Enter the vendors name" required />
        </div>
        <div>
          <label htmlFor="item">Item Purchased:</label>
          <input type="text" id="item" name="item" placeholder="Enter the items name" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}





export function Transactions({count, onClick}){


  return(
    <div> 
    <div>  
    <p> Date Purchased: 
      {purchaseHistory[count].date} </p>

      <p> Amount Spent: $ 
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

  //Calls the transactions() function which takes two props: the count variable and the handlClick
// function.
//Invokes the UserForm function which will attempt to extract data from the user to use in calculating
//budget.
  return(

    <div> 
      <h1>Transaction History</h1>
       
      <Transactions count={count} onClick={handleClick} />
      <UserTransactionForm/>
      <RemoveTransaction/>
      
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