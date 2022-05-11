import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
       title: "Car Insurance",
       amount: 294, 
       date: new Date(2022, 3, 12)
    },

    { 
      id: "e2",
      title: "Medical expense", 
      amount: 40, 
      date: new Date(2022, 3, 24)
    },

    { 
      id: "e3",
      title: "Food", 
      amount: 60, 
      date: new Date(2022, 4, 12)}
  ];
  return (
    <div>
      <h2>Let's get started now </h2>
      <p>This is also visible</p>
      <ExpenseItem title= { expenses[0].title} amount= {expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date = {expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} />
    </div>
  );
}

export default App;
