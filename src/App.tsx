import { Suspense } from "react";
import "./App.css";
import { SuspenseForm } from "./Form/SuspenseForm";
import { NormalForm } from "./Form/NormalForm";
import { AsyncDefaultForm } from "./Form/AsyncDefaultForm";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspenseForm />
      </Suspense>
      <NormalForm />
      <AsyncDefaultForm />
    </div>
  );
}

export default App;
