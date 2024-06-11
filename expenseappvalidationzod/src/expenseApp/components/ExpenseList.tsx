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
      <div className="container">
        <div className="table-responsive">
          <table className="table table-bordered border-success">
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
              {expenses.map((expense) => (
                // key to pass in unique value
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>${expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>
                    <button
                      type="button"
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
                <td>Total</td>
                <td>
                  $
                  {expenses
                    .reduce(
                      (total, expense) => total + parseInt(expense.amount),
                      0
                    )
                    .toFixed(2)}
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
