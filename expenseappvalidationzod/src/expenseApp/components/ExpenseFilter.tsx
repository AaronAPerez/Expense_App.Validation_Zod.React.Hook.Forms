import categories from "../categories"

interface FilterProps {
  visibleExpense: (category : string) => void;
}

const ExpenseFilter = ({ visibleExpense }: FilterProps) => {
  return (
    <>
      <div className="container mt-5">
            <select
              className="form-select"
              onChange={(e) => visibleExpense(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
      </div>
    </>
  )
}

export default ExpenseFilter
