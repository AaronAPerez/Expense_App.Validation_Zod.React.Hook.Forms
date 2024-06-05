import { useState } from "react";
import ExpenseFilter from "./expenseApp/components/ExpenseFilter";
import ExpenseForm from "./expenseApp/components/ExpenseForm";
import ExpenseList from "./expenseApp/components/ExpenseList";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "aaa- Internet", amount: 70, category: "Bills" },
    { id: 2, description: "bbb- Movie Theater", amount: 25, category: "Entertainment" },
    { id: 3, description: "ccc- Bacon", amount: 20, category: "Food" },
    { id: 4, description: "ddd- Jeans", amount: 35, category: "Shopping" },
    { id: 5, description: "eee- Meat", amount: 60, category: "Groceries" },
  ]);

  const addItem = (data: Expense) => {
    console.log(data)
    setExpenses((expenses) => [...expenses, { ...data, id: expenses.length + 1 }]);
  };

  const deleteItem = (id: number) => {
    // Update value of expenses
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filterItem = (category: string) => {
    if (category) {
      const filterItem = expenses.filter((expense) => expense.category === category);
      setExpenses(filterItem);
    } else {
      setExpenses([
        { id: 1, description: "aaa-Internet", amount: 10, category: "Bills" },
        { id: 2, description: "bbb-Movie Theater", amount: 15, category: "Entertainment" },
        { id: 3, description: "ccc-Bacon", amount: 20, category: "Food" },
        { id: 4, description: "ddd-Jeans", amount: 25, category: "Shopping" },
        { id: 5, description: "eee-Meat", amount: 60, category: "Groceries" },
      ]);
    }
  };

  return (
    <>
      <h1 className="text-center">Expense Tracker</h1>

      <div className="m-5">
        <ExpenseForm addItem={addItem} />
      </div>

      <div className="m-5">
        <ExpenseFilter filterItem={filterItem} />
      </div>

      <div className="m-5">
        <ExpenseList items={expenses} deleteItem={deleteItem} />
      </div>
    </>
  );
};

export default App;