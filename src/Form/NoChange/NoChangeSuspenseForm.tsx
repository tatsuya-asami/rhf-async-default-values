import { useForm } from "react-hook-form";
import { useFetchUserWithSuspense } from "../../api";
import { FormProps } from "../../types";

export const NoChangeSuspenseForm = ({ outOfForm, description }: FormProps) => {
  const { data } = useFetchUserWithSuspense();
  const methods = useForm({
    defaultValues: {
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
        <input {...methods.register("firstName")} />
        <input {...methods.register("lastName")} />
        <input {...methods.register("description")} />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => methods.reset()}>
          Reset
        </button>
      </form>
    </div>
  );
};
