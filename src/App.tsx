import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "./app/hooks";

function App() {
  const [count, setCount] = useState(0);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return <div className="App">{isLoggedIn && <h1>HomePage</h1>}</div>;
}

export default App;
