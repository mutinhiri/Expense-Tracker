import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294, date: new Date(2021, 3, 12)}
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
