import { Suspense, useState } from "react";
import "./App.css";
import { NoChangeSuspenseForm } from "./Form/NoChange/NoChangeSuspenseForm";
import { NoChangeValuesForm } from "./Form/NoChange/NoChangeValuesForm";
import { NoChangeAsyncDefaultForm } from "./Form/NoChange/NoChangeAsyncDefaultForm";
import { ChangePropsForm } from "./Form/Reactive/ChangePropsForm";
import { ChangeSuspenseForm } from "./Form/Reactive/ChangeSuspenseForm";
import { ChangeAsyncDefaultForm } from "./Form/Reactive/ChangeAsyncDefaultForm";
import { ChangeValuesForm } from "./Form/Reactive/ChangeValuesForm";
import { NoChangePropsForm } from "./Form/NoChange/NoChangePropsForm";

function App() {
  const [outOfForm, setOutOfForm] = useState("outOfForm");
  const [description, setDescription] = useState("description");
  return (
    <div>
      <h1>default values from server</h1>
      <button onClick={() => setOutOfForm("changed setOutOfForm")}>
        set out of form
      </button>
      <button onClick={() => setDescription("changed description")}>
        set description
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1em",
          maxWidth: "1000px",
        }}
      >
        <div style={{ border: "1px solid" }}>
          <h2>初期値で使っている値が変わっても変わらない</h2>
          <div>
            <h3>Suspense</h3>
            <Suspense fallback={<div>Loading...</div>}>
              <NoChangeSuspenseForm
                outOfForm={outOfForm}
                description={description}
              />
            </Suspense>
          </div>
          <div>
            <h3>Async</h3>
            <NoChangeAsyncDefaultForm
              outOfForm={outOfForm}
              description={description}
            />
          </div>
          <div>
            <h3>Values</h3>
            <NoChangeValuesForm />
          </div>
          <div>
            <h3>Props</h3>
            <NoChangePropsForm
              outOfForm={outOfForm}
              description={description}
            />
          </div>
        </div>
        <div style={{ border: "1px solid" }}>
          <h2>初期値で使っている値が変わるとフォームも変わる</h2>
          <div>
            <div>
              <h3>Suspense</h3>
              <Suspense fallback={<div>Loading...</div>}>
                <ChangeSuspenseForm
                  outOfForm={outOfForm}
                  description={description}
                />
              </Suspense>
            </div>
            <h3>Async</h3>
            <ChangeAsyncDefaultForm />
          </div>
          <div>
            <h3>Values</h3>
            <ChangeValuesForm outOfForm={outOfForm} description={description} />
          </div>
          <div>
            <h3>Props</h3>
            <ChangePropsForm outOfForm={outOfForm} description={description} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
