import './ExpensesList.css'
import React from 'react'

const ExpensesList = (props) => {
  {expenses.length === 0 ? <p>No expenses found </p>: expenses.map((expense, index) => (<ExpenseItem 
    key={expense.id}
    title={expense.title} 
    amount={expense.amount} 
    date={expense.date}/>))}
  
}

export default ExpensesList