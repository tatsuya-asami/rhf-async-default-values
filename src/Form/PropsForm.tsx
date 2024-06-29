import { useForm } from "react-hook-form";
import { useFetchUser } from "../api";

export const PropsForm = () => {
  const { data } = useFetchUser();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <PropsFormChildren firstName={data.firstName} lastName={data.lastName} />
  );
};

type Props = {
  firstName: string;
  lastName: string;
};

const PropsFormChildren = ({ firstName, lastName }: Props) => {
  const methods = useForm({
    defaultValues: {
      firstName,
      lastName,
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
