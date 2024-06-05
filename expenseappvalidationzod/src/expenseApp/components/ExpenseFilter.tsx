import categories from "../categories";

interface FilterProps {
  filterItem: (category: string) => void;
}

const ExpenseFilter = ({ filterItem }: FilterProps) => {
  return (
    <>
    
          <h1 className="text-center">Filter</h1>
          <select
            name=""
            id=""
            className="form-select"
            onChange={(event) => filterItem(event.target.value)}
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
     
    </>
  );
};

export default ExpenseFilter;