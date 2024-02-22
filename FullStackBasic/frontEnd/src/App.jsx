import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes").then((response) => {
      console.log(response.data);
      setJokes(response.data);
    });
  }, []);

  return (
    <>
      <h1 style={{ color: "greenyellow" }}>Nitish Raj</h1>

      <p>JOKES : {jokes.length}</p>
      {jokes.map((item) => (
        <div key={item.id}>
          <h1>{item.title} </h1>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
