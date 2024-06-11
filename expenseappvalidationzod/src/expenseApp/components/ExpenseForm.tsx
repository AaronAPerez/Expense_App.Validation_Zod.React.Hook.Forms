import categories from "../categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MdFormatListBulletedAdd } from "react-icons/md";


const schema = z.object({
  description: z.string().trim().min(1, { message: "Required field - Enter at least 1 character" }),
  amount: z.number().int().min(1, { message: "Required field" }),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({onSubmit}: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="description" className="form-label">
              {/* Description */}
            </label>
            <input
              {...register("description")}
              id="description"
              type="text"
              className="form-control"
              placeholder="Description"
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="amount" className="form-label">
              {/* Amount */}
            </label>
            <input
              {...register("amount", { valueAsNumber: true })}
              id="amount"
              type="number"
              className="form-control"
              placeholder="Amount"
            />
            {errors.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="category" className="form-label"></label>
            <select
              {...register("category")}
              id="category"
              className="form-select"
            >
              <option>Select a Category</option>
              {/* // Map callback function to pass in category */}
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-danger">{errors.category.message}</p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-success"
            type="submit">
              Add Expense 
              <MdFormatListBulletedAdd size={30} />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
