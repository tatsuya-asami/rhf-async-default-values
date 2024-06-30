import { Suspense, useState } from "react";
import "./App.css";
import { SuspenseForm } from "./Form/SuspenseForm";
import { ValuesForm } from "./Form/ValuesForm";
import { AsyncDefaultForm } from "./Form/AsyncDefaultForm";
import { PropsForm } from "./Form/PropsForm";

function App() {
  const [outOfForm, setOutOfForm] = useState("outOfForm");
  const [description, setDescription] = useState("description");
  return (
    <div>
      <h1>default values from server</h1>
      <button onClick={() => setOutOfForm("default values from server")}>
        set out of form
      </button>
      <button onClick={() => setDescription("description")}>
        set description
      </button>
      <div>
        <h2>Async</h2>
        <AsyncDefaultForm outOfForm={outOfForm} description={description} />
      </div>
      <div>
        <h2>Values</h2>
        <ValuesForm outOfForm={outOfForm} description={description} />
      </div>
      <div>
        <h2>Props</h2>
        <PropsForm outOfForm={outOfForm} description={description} />
      </div>
      <div>
        <h2>Suspense</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <SuspenseForm outOfForm={outOfForm} description={description} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
