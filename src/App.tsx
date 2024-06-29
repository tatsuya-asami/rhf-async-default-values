import { Suspense } from "react";
import "./App.css";
import { SuspenseForm } from "./Form/SuspenseForm";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspenseForm />
      </Suspense>
    </div>
  );
}

export default App;
