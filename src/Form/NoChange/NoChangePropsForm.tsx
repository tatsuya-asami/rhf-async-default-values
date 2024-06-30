import { useForm } from "react-hook-form";
import { useFetchUser } from "../../api";
import { FormProps } from "../../types";

export const NoChangePropsForm = ({ outOfForm, description }: FormProps) => {
  const { data } = useFetchUser();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <PropsFormChildren
      firstName={data?.firstName ?? ""}
      lastName={data?.lastName ?? ""}
      outOfForm={outOfForm}
      description={description}
    />
  );
};

type Props = {
  firstName: string;
  lastName: string;
};

const PropsFormChildren = ({
  firstName,
  lastName,
  outOfForm,
  description,
}: Props & FormProps) => {
  const methods = useForm({
    defaultValues: {
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
