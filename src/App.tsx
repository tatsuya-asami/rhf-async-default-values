import { Suspense } from "react";
import "./App.css";
import { SuspenseForm } from "./Form/SuspenseForm";
import { ValuesForm } from "./Form/ValuesForm";
import { AsyncDefaultForm } from "./Form/AsyncDefaultForm";
import { PropsForm } from "./Form/PropsForm";

function App() {
  return (
    <div>
      <h1>default values from server</h1>
      <div>
        <h2>Suspense</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <SuspenseForm />
        </Suspense>
      </div>
      <div>
        <h2>Values</h2>
        <ValuesForm />
      </div>
      <div>
        <h2>Async</h2>
        <AsyncDefaultForm />
      </div>
      <div>
        <h2>Props</h2>
        <PropsForm />
      </div>
    </div>
  );
}

export default App;
