import categories from "../categories";

interface FilterProps {
    onSelectCategory: (category: string) => void;
}


const ExpenseFilter = ({onSelectCategory}:FilterProps) => {
  return (
    <>
    <h1 className="text-center">Filter</h1>
        <select
        name="" 
        id=""
        className="form-select" 
        onChange={(e) => onSelectCategory(e.target.value)}
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