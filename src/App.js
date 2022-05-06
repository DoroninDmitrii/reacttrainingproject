import "./styles/App.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import RoutesApp from "./components/RoutesApp";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <RoutesApp/>
    </BrowserRouter>
  );
}

export default App;
