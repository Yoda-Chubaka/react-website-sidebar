import './App.css';
import Parent from "./components/Parent";

function App() {

  let name = "Joe";

  function helper(arg) {
    console.log(arg);
  }

  return (
    <>
      <h1>Компонент ПРЕДОК</h1>

      <Parent man={name} fun={helper} />
    </>
  );
}

export default App;
