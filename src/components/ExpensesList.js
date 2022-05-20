import './ExpensesList.css'
import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
  {props.item.length === 0 ? <p>No expenses found </p>: expenses.map((expense, index) => (<ExpenseItem 
    key={expense.id}
    title={expense.title} 
    amount={expense.amount} 
    date={expense.date}/>))}
  
    return <ul className='expenses-list'>

    </ul>
}

export default ExpensesList