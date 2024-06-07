import categories from "../categories";

interface FilterProps {
  visibleExpense: (category: string) => void;
}

const ExpenseFilter = ({ visibleExpense }: FilterProps) => {
  return (
    <>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col">
              <h1 className="text-center">Filter</h1>
            </th>

            <th scope="col">
              <select
                // name=""
                // id=""
                className="form-select"
                onChange={(e) => visibleExpense(e.target.value)}
              >
                <option value="">All categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default ExpenseFilter;
