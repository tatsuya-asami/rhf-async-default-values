import { useForm } from "react-hook-form";
import { useFetchUserWithSuspense } from "../api";

export const SuspenseForm = () => {
  const { data } = useFetchUserWithSuspense();
  const methods = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
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
    </form>
  );
};
