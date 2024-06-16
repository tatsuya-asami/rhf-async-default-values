import "./App.css";

function App() {
  const postRequest = async () => {
    console.log("post request");
  };

  return (
    <div>
      <button onClick={postRequest}>Click me</button>
    </div>
  );
}

export default App;
