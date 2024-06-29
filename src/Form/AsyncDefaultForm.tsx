import { useForm } from "react-hook-form";
import { useFetchUserByMutation } from "../api";

export const AsyncDefaultForm = () => {
  const { trigger } = useFetchUserByMutation();
  const methods = useForm({
    defaultValues: trigger,
    // resetOptions: {
    //   keepValues: true,
    // },
  });

  return (
    <form
      onSubmit={methods.handleSubmit((value) => {
        console.log(value);
      })}
    >
      <input {...methods.register("firstName")} />
      <input {...methods.register("lastName")} />
      <button type="submit">Submit</button>{" "}
      <button type="button" onClick={() => methods.reset()}>
        Reset
      </button>
    </form>
  );
};
