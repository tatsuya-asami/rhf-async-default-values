import useSWRMutation from "swr/mutation";
import "./App.css";

async function sendRequest(
  url: string,
  { arg }: { arg: { username: string } }
) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

function App() {
  const { trigger, isMutating } = useSWRMutation(
    "https://example.com/user",
    sendRequest
  );

  return (
    <div>
      {isMutating ? "Loading..." : "Not loading"}
      <button onClick={() => trigger({ username: "sample" })}>Click me</button>
    </div>
  );
}

export default App;
