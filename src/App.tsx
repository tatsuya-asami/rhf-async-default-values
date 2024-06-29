import { Suspense } from "react";
import "./App.css";
import { SuspenseForm } from "./Form/SuspenseForm";
import { NormalForm } from "./Form/NormalForm";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspenseForm />
      </Suspense>
      <NormalForm />
    </div>
  );
}

export default App;
