import './ExpensesList.css'
import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    return <ul className='expenses-list'>
      {props.items.length === 0 ? <p>No expenses found </p>: props.items.map((expense, index) => (<ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}/>))}
    </ul>
}

export default ExpensesList