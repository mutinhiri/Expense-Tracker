import React, { useState } from 'react'
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (expense ) => {
    setExpenses([prevExpense => {
      return [expense, ...prevExpense]
    }]);

  }


  return (
    <div>
      {expenses.length === 0 ? <p>No expenses found </p>: expenses.map((expense, index) => (<ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>))}
      
      <NewExpense onAddExpense= { addExpenseHandler}/>
    </div>
  );
}

export default App;
