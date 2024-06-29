import { Suspense } from "react";
import "./App.css";
import { SuspenseForm } from "./Form/SuspenseForm";
import { ValuesForm } from "./Form/ValuesForm";
import { AsyncDefaultForm } from "./Form/AsyncDefaultForm";
import { PropsForm } from "./Form/PropsForm";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspenseForm />
      </Suspense>
      <ValuesForm />
      <AsyncDefaultForm />
      <PropsForm />
    </div>
  );
}

export default App;
