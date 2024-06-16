import useSWRMutation from "swr/mutation";
import "./App.css";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

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
  const { data } = useSWR("https://example.com/user", fetcher);
  const { data: data2 } = useSWR("https://example.com/user", fetcher);
  const { data: data3 } = useSWR("https://example.com/user", fetcher);

  const { trigger, isMutating } = useSWRMutation(
    "https://example.com/user",
    sendRequest
  );

  return (
    <div>
      <div>data:{data && data.firstName}</div>
      <div>data2:{data2 && data2.firstName}</div>
      <div>data3:{data3 && data3.firstName}</div>
      <button onClick={() => trigger({ username: "sample" })}>Click me</button>
      <div>{isMutating ? "Loading..." : "Not loading"}</div>
    </div>
  );
}

export default App;
