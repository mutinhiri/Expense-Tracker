import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [];
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
