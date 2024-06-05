import { Key } from "react";

interface Expense {
  id: Key;
  description: string;
  amount: number;
  category: string;
}

interface expenseProps {
  expenses: Expense[];
 DeleteItem: (id: number) => void;
}

const ExpenseList = ({ expenses, deleteItem }: expenseProps) => {
  if (expenses.length === 0) return null;

  return (
    <>
      <div className="row">
        <div className="col">
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* Map through items, callback function (item) */}
              {items.map((item, index) => (
                // key to pass in unique value
                <tr key={item.id}>
                  {/* Pass in values */}
                  <td>{item.description}</td>
                  <td>${item.amount}</td>
                  <td>{item.category}</td>
                  <td>
                  <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <h2>Total</h2>
                </td>
               
                <td>
                  <h2>
                     {/* Reduce function sums up least of numbers (amount) in an array */}
                    {/* takes in 2 perameters total price and current value */}
                    $
                    {items
                      .reduce((total, item) => total + parseInt(item.amount),0)
                      .toFixed(2)}
                  </h2>
                  </td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
