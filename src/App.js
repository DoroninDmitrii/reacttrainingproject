import "./styles/App.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import RoutesApp from "./components/RoutesApp";
import { AuthContext } from './context/index'
import { useEffect, useReducer } from "react";
import { mainReducer } from "./reducer/mainReducer";

function App() {

  const initialState =  { isAuth: true}

  const [state, dispatch] = useReducer(mainReducer, initialState)
  console.log(state)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch({ type: "LOCALSTORAGE", payload: false })
    }
  }, [])

  return (

    <AuthContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <RoutesApp />
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
