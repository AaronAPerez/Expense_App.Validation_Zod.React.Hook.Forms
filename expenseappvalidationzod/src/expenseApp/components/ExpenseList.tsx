
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseFormProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseFormProps) => {
  if (expenses.length === 0) return null;

  return (
    <>
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
          {expenses.map((expense, index) => (
            // key to pass in unique value
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>${expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
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
                $
                {expenses
                  .reduce(
                    (total, expense) => total + parseInt(expense.amount),
                    0
                  )
                  .toFixed(2)}
              </h2>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
