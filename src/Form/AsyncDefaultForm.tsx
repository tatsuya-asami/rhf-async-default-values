import { useForm } from "react-hook-form";
import { useFetchUserByMutation } from "../api";

export const AsyncDefaultForm = () => {
  const { trigger } = useFetchUserByMutation();
  const methods = useForm({
    defaultValues: trigger,
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
