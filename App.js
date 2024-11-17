import React from "react";
import useData from "./hooks/useData";
import User from "./components/user";


function App() {

  // To Consume Value From Proivde Method 1
  // let abc = useData();
  // console.log(abc.name);

  let { name, setName } = useData();

  function chng() { setName("Asad") }

  return (
    <div className="App">
      <h1>THis IS App</h1>
      <h1>{name}</h1>
      <button onClick={chng}>Click Me</button>

      <User/>

    </div>
  );
}
export default App;

