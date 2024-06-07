import categories from "../categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface ExpenseFormProps {
  addExpense: (data: FormData) => void;
}

const schema = z.object({
  description: z.string().min(1, { message: "Required field" }),
  amount: z.number().min(1, { message: "Required field" }),
  category: z.string().min(1, { message: "Required field" }),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ addExpense }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        onSubmit={handleSubmit(addExpense)}>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                {...register("description")}
                id="description"
                type="text"
                className="form-control"
              />
              {errors.description && (
                <p className="text-danger">{errors.description.message}</p>
              )}
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                {...register("amount",{valueAsNumber:true})}
                id="amount"
                type="number"
                className="form-control"
              />
              {errors.amount && (
                <p className="text-danger">{errors.amount.message}</p>
              )}
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                {...register("category")}
                id="category"
                className="form-select"
              >
                <option value=""></option>
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


            <div className="col-2">
            <div className="pt-4 mt-2">

              <button className="btn btn-outline-primary">Submit</button>

            </div>
            </div>
          </div>
   
      </form>
    </>
  );
};

export default ExpenseForm;
