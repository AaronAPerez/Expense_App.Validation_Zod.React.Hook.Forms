import { Key, useState } from "react";
import ExpenseFilter from "./expenseApp/components/ExpenseFilter";
import ExpenseForm from "./expenseApp/components/ExpenseForm";
import ExpenseList from "./expenseApp/components/ExpenseList";
// import categories from "./expenseApp/categories";


interface Expense {
  id: Key;
  description: string;
  amount: number;
  category: string;
}


const App = () => {

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa- Internet", amount: 70, category: "Bills" },
    { id: 2, description: "bbb- Movie Theater", amount: 25, category: "Entertainment" },
    { id: 3, description: "ccc- Bacon", amount: 20, category: "Food" },
    { id: 4, description: "ddd- Jeans", amount: 35, category: "Shopping" },
    { id: 5, description: "eee- Meat", amount: 60, category: "Groceries" },
  ]);

  const addExpense = (data: Expense) => {
    setExpenses([...expenses, data]);
  };

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpense = (category: string) => {
    if (category) {
      const visibleExpenses = expenses.filter((e) => e.category === category);
      setExpenses(visibleExpenses);
    } else {
      setExpenses([
        { id: 1, description: "aaa- Internet", amount: 70, category: "Bills" },
        { id: 2, description: "bbb- Movie Theater", amount: 25, category: "Entertainment" },
        { id: 3, description: "ccc- Bacon", amount: 20, category: "Food" },
        { id: 4, description: "ddd- Jeans", amount: 35, category: "Shopping" },
        { id: 5, description: "eee- Meat", amount: 60, category: "Groceries" },
      ]);
    }
  };

    

  return (
    <>
      <h1 className="text-center">Expense Tracker</h1>

      <div className="m-5">
        <ExpenseForm addExpense={addExpense} />
      </div>

      <div className="m-5">
        <ExpenseFilter onSelectCategory={visibleExpense} />
      </div>

      <div className="m-5">
        <ExpenseList expenses={expenses} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default App;