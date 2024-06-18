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
  const { data: data1, isValidating: isValidating1 } = useSWR(
    "https://example.com/user",
    fetcher
  );
  const { data: data2, isValidating: isValidating2 } = useSWR(
    "https://example.com/user",
    fetcher
  );
  const { data: data3, isValidating: isValidating3 } = useSWR(
    "https://example.com/user",
    fetcher
  );

  const { trigger, isMutating } = useSWRMutation(
    "https://example.com/user",
    sendRequest
  );

  return (
    <div>
      <div>
        <span>data:{data1?.firstName}</span>
        <span>{isValidating1 ? "GET Validating1" : "Done"}</span>
      </div>

      <div>
        <span>data2:{data2?.firstName}</span>
        <span>{isValidating2 ? "GET Validating2" : "Done"}</span>
      </div>

      <div>
        <span>data3:{data3?.firstName}</span>
        <span>{isValidating3 ? "GET Validating3" : "Done"}</span>
      </div>

      <button onClick={() => trigger({ username: "sample" })}>Click me</button>
      <div>{isMutating ? "POST Mutating..." : "Done"}</div>
    </div>
  );
}

export default App;
