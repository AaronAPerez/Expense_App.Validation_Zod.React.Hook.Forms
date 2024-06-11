import categories from "../categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MdFormatListBulletedAdd } from "react-icons/md";


const schema = z.object({
  description: z.string().trim().min(1, { message: "Required field - Enter at least one character" }),
  amount: z.number({ message: "Required field - Enter at least one number" }),
  category: z.string(),
})
.refine((data) => data.category !== 'Select a Category', {
  message: "Required Field - Select a Category from drop down options",
  path: ["category"]
})


type FormData = z.infer<typeof schema>

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
        <div className="row my-3 pt-4">
          <div className="col">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              {...register("description")}
              id="description"
              type="text"
              className="form-control"
              placeholder=""
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              {...register("amount", { valueAsNumber: true })}
              id="amount"
              type="number"
              className="form-control"
              placeholder=""
            />
            {errors.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )}
          </div>
        </div>
        <div className="row my-3">
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
         <div className="row my-3">
          <div className="col my-3 pt-4">
          <div className="wrapper">
          <div className="link_wrapper">
            <button className="btn btn-success"
            type="submit">
              Add Expense
              <MdFormatListBulletedAdd size={28} />
              <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
            </button>
          </div>
        </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm
