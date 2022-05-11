import './ExpenseItem.css'

function ExpenseItem(props) {
    const expenseDate = new Date(2022, 2, 23);
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 300
    return (
        <div className='expense-item'>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title }</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;