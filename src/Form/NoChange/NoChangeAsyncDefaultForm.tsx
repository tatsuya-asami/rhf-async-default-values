import { useForm } from "react-hook-form";
import { useFetchUserByMutation } from "../../api";
import { FormProps } from "../../types";

export const NoChangeAsyncDefaultForm = ({
  outOfForm,
  description,
}: FormProps) => {
  const { trigger } = useFetchUserByMutation();
  const {
    formState: { isLoading },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues: async () => {
      const result = await trigger();
      return { ...result, description };
    },
  });

  return (
    <div>
      <div>{outOfForm}</div>
      <form
        onSubmit={handleSubmit((value) => {
          console.log(value);
        })}
      >
        <input {...register("firstName")} disabled={isLoading} />
        <input {...register("lastName")} disabled={isLoading} />
        <input {...register("description")} disabled={isLoading} />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </form>
    </div>
  );
};
