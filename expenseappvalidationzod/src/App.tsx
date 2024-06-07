import { useState } from "react";
import ExpenseFilter from "./expenseApp/components/ExpenseFilter";
import ExpenseForm from "./expenseApp/components/ExpenseForm";
import ExpenseList from "./expenseApp/components/ExpenseList";



const App = () => {

  const [selectedCategory, setSelectedCategory]= useState('');
   // useState hook to manage the expenses state
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa- Internet", amount: 70, category: "Bills" },
    { id: 2, description: "bbb- Movie Theater", amount: 25, category: "Entertainment"},
    { id: 3, description: "ccc- Bacon", amount: 20, category: "Food" },
    { id: 4, description: "ddd- Jeans", amount: 35, category: "Shopping" },
    { id: 5, description: "eee- Meat", amount: 60, category: "Groceries" },
  ]);

    // Function to add a new expense to the expenses state
  // const addExpense = (data) => {
  //   console.log(data);
  //   setExpenses(() => [...expenses, data]);
  // };


 
   // Function to delete an expense from the expenses state
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };


  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;



  return (
    <>
      <div className="container">
        <h1 className="text-center mb-2">Expense Tracker</h1>

        <div className="row">
          <div className="col">
            <ExpenseForm addExpense={expense => setExpenses([...expenses,{...expense,id:expenses.length + 1}])} />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
          <ExpenseFilter visibleExpense={category => setSelectedCategory(category)
             }/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="">
              <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
