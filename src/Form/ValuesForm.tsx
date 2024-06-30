import { useForm } from "react-hook-form";
import { useFetchUser } from "../api";
import { FormProps } from "../types";

export const ValuesForm = ({ outOfForm, description }: FormProps) => {
  const { data } = useFetchUser();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      description: "",
    },
    values: {
      firstName: data?.firstName,
      lastName: data?.lastName,
      description,
    },
    resetOptions: {
      keepDirtyValues: true,
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
