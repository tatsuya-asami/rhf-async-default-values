import { useForm } from "react-hook-form";
import { useFetchUser } from "../api";
import { FormProps } from "../types";

export const PropsForm = ({ outOfForm, description }: FormProps) => {
  const { data, isValidating } = useFetchUser();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <PropsFormChildren
      firstName={data?.firstName ?? ""}
      lastName={data?.lastName ?? ""}
      outOfForm={outOfForm}
      description={description}
      isValidating={isValidating}
    />
  );
};

type Props = {
  firstName: string;
  lastName: string;
  isValidating: boolean;
};

const PropsFormChildren = ({
  firstName,
  lastName,
  outOfForm,
  description,
  isValidating,
}: Props & FormProps) => {
  const methods = useForm({
    values: {
      firstName,
      lastName,
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
