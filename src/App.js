import React, { useState } from 'react'
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./NewExpense/NewExpense";

function App() {
  const INITIAL_EXPENSES = [
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

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (expense ) => {
    setExpenses([prevExpense => {
      return [expense, ...prevExpense]
    }]);

  }


  return (
    <div>
      {}
      {expenses.map((expense, index) => (<ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>))}
      <NewExpense onAddExpense= { addExpenseHandler}/>
    </div>
  );
}

export default App;
