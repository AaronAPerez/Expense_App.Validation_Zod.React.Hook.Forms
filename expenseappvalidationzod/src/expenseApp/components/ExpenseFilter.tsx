import categories from "../categories";

interface FilterProps {
    visibleExpense: (category: string) => void;
}


const ExpenseFilter = ({ visibleExpense }: FilterProps) => {
  return (
    <>
      <h1 className="text-center">Filter</h1>
        <select
        name="" 
        id=""
        className="form-select" 
        onChange={(e) => visibleExpense(e.target.value)}
        >
    
      <option value="">All categories</option>
      {categories.map(category => (
        <option key={category} value={category}>
        {category}
        </option>
      ))}
    </select>
    </>
  )
}

export default ExpenseFilter