import React, { useState} from 'react';
import ExpenseDate from './ExpenseDate';
// import Card from './Card';
import './ExpenseItem.css'

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title + "text ")

    const clickHandler = () => {
        setTitle('Updated')
        console.log('click work')
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title }</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </div>
    )
}

export default ExpenseItem;