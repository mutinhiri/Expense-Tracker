import React, { useState } from 'react'
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./NewExpense/NewExpense";

function App() {

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
