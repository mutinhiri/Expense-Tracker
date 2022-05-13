import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title }</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={() => {console.log('licked ')}}>Change title</button>
        </div>
    )
}

export default ExpenseItem;