import { useState } from "react";
import ExpenseFilter from "./expenseApp/components/ExpenseFilter";
import ExpenseForm from "./expenseApp/components/ExpenseForm";
import ExpenseList from "./expenseApp/components/ExpenseList";
import { FaPiggyBank } from "react-icons/fa";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  // useState hook to manage the expenses state
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Internet", amount: 70, category: "Utilities" },
    { id: 2, description: "Movie Theater",amount: 25,category: "Entertainment" },
    { id: 3, description: "Gas", amount: 20, category: "Other" },
    { id: 4, description: "Jeans", amount: 35, category: "Shopping" },
    { id: 5, description: "Meat", amount: 60, category: "Groceries" },
  ]);


  const visibleExpenses = selectedCategory
  ? expenses.filter((e) => e.category === selectedCategory)
  : expenses;

  // Function to delete an expense from the expenses state
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  };



  return (
    <>
      <div className="container">
        <header className="py-2 mb-2 border-bottom">
          <h1 className="text-center">
            EXPENSE TR<FaPiggyBank size={57} color="pink"/>CKER</h1>
        </header>
        <div className="main">
          <div className="row">
            <div className="col-md-4">
              {/* <h2 className="text-center">New Expense</h2> */}
              <ExpenseForm
               onSubmit={(expense) =>
                  setExpenses([
                    ...expenses,
                    { ...expense, id: expenses.length + 1 },
                  ])
                }
              />
            </div>
          <div className="col-md-8 pt-2">
              <ExpenseFilter
              visibleExpense={(category) => setSelectedCategory(category)}
              />
              <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default App;
