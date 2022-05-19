import React, { useState } from 'react'
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
       title: "Car Insurance",
       amount: 294, 
       date: new Date(2022, 3, 12)
    },

    { 
      id: "e2",
      title: "Medical expense", 
      amount: 40, 
      date: new Date(2022, 3, 24)
    },

    { 
      id: "e3",
      title: "Food", 
      amount: 60, 
      date: new Date(2022, 4, 12)
    }
  ];
  const addExpenseHandler = (expense ) => {
    console.log('In App.js')
    console.log(expense)

  }


  return (
    <div>
      {expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
      <NewExpense onAddExpense= { addExpenseHandler}/>
    </div>
  );
}

export default App;
