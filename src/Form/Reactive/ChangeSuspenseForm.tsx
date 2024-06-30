import { useForm } from "react-hook-form";
import { useFetchUserWithSuspense } from "../../api";
import { FormProps } from "../../types";

export const ChangeSuspenseForm = ({ outOfForm, description }: FormProps) => {
  const { data, isValidating } = useFetchUserWithSuspense();
  const methods = useForm({
    values: {
      firstName: data.firstName,
      lastName: data.lastName,
      description,
    },
  });

  return (
    <div>
      <div>{outOfForm}</div>
      <form
        onSubmit={methods.handleSubmit((value) => {
          console.log(value);
        })}
      >
        <input {...methods.register("firstName")} disabled={isValidating} />
        <input {...methods.register("lastName")} disabled={isValidating} />
        <input {...methods.register("description")} disabled={isValidating} />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => methods.reset()}>
          Reset
        </button>
      </form>
    </div>
  );
};
