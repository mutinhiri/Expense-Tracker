import React from 'react'
import './ExpenseForm'

const ExpenseForm = () => {
  const titleChangeHandler = (e) => {
    console.log(e)
  }

  return(
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" onChange={ titleChangeHandler }/>
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"/>
        </div>

        <div className='new-expense__control'>
          <label>pass</label>
          <input type="password" onChange={ titleChangeHandler}/>
        </div>

        <div className='new-expense__control'>
          <label>Date </label>
          <input type="date" min="2019-01-07" max="2022-12-12"/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  )

}

export default ExpenseForm