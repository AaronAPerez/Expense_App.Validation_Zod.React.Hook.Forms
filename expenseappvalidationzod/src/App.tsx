import { useState } from "react";
import ExpenseFilter from "./expenseApp/components/ExpenseFilter";
import ExpenseForm from "./expenseApp/components/ExpenseForm";
import ExpenseList from "./expenseApp/components/ExpenseList";
// import categories from "./expenseApp/categories";


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

  const addExpense = (data) => {
    console.log(data)
    setExpenses(() => [...expenses,data]);
  }
  //   setExpenses([...expenses, data]);
  // };

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const visibleExpenses = (category) => {
      const visibleExpenses = expenses.filter((e) => e.category === category);
      setExpenses(visibleExpenses);
  };

    

  return (
    <>
      <h1 className="text-center">Expense Tracker</h1>

      <div className="row">
        <div className="col">
        <ExpenseForm addExpense={addExpense} />
      </div>
     

     
        <div className="col">

        <ExpenseFilter visibleExpense={visibleExpenses} />
      </div>
      </div>

      <div className="m-5">
        <ExpenseList expenses={expenses} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default App;