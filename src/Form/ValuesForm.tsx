import { useForm } from "react-hook-form";
import { useFetchUser } from "../api";

export const ValuesForm = () => {
  const { data } = useFetchUser();
  const methods = useForm({
    values: {
      firstName: data?.firstName,
      lastName: data?.lastName,
    },
    resetOptions: {
      keepDirtyValues: true,
    },
  });

  return (
    <form
      onSubmit={methods.handleSubmit((value) => {
        console.log(value);
      })}
    >
      <input {...methods.register("firstName")} />
      <input {...methods.register("lastName")} />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => methods.reset()}>
        Reset
      </button>
    </form>
  );
};
