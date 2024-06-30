import { useForm } from "react-hook-form";
import { useFetchUserByMutation } from "../api";
import { FormProps } from "../types";

export const AsyncDefaultForm = ({ outOfForm, description }: FormProps) => {
  const { trigger } = useFetchUserByMutation();
  const methods = useForm({
    defaultValues: async () => {
      const result = await trigger();
      return { ...result, description };
    },
    // values: { description },
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
