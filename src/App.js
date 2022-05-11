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
    
    { title: "Food", amount: 60, date: new Date(2022, 4, 12)}
  ];
  return (
    <div>
      <h2>Let's get started now </h2>
      <p>This is also visible</p>
      <ExpenseItem />
      <ExpenseItem/>
    </div>
  );
}

export default App;
