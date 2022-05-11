import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2022, 2, 23);
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 300
    return (
        <div className='expense-item'>
            <div>March 23 2022</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$ 456</div>
            </div>
        </div>
    )
}

export default ExpenseItem;