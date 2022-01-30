import React, { useState} from 'react'
import './ExpenseForm'

const ExpenseForm = () => {
  const [titleState, setTitleState] = useState('')
  const [amountChange, setAmountChange] = useState('')
  const [datei, setDatei] = useState('')
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (e) => {
    setTitleState(e.target.value)
  }

  const amountChangeHamdler = (e) => {
    setAmountChange(e.target.value)
  }
  
  const dateChangeHandler = (e) => {
    setDatei(e.target.value)
  }
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value
    // })
  
  

  const submitHandler  = (e) => {
    console.log('submitted')
    e.preventDefault()

    const newInfo = {
      title: titleState,
      amount: amountChange,
      date: new Date(datei)
    }
    console.log(newInfo)
    setTitleState('')
    setAmountChange('')
    setDatei('')
  }

  return(
    <form onSubmit={ submitHandler }>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" value={titleState} onChange={ titleChangeHandler }/>
        </div>
        {/* <p>{() => { new Date('2022-03-02')}}</p> */}
        
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" value={ amountChange } min="0.01" step="0.01" onChange={ amountChangeHamdler}/>
        </div>

        <div className='new-expense__control'>
          <label>Date </label>
          <input type="date" min="2019-01-07" value={ datei } max="2022-12-12" onChange={ dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions '>
        <button type='submit'>Add expense</button> 
      </div>
    </form>
  )

}

export default ExpenseForm;