import React, { useContext } from 'react';
import Mybutton from '../components/UI/button/Mybutton';
import Myinput from '../components/UI/input/Myinput';
import { AuthContext } from '../context';

const Login = () => {

  const { state, dispatch } = useContext(AuthContext)

  const submitLogin = (e) => {
    e.preventDefault()

    const switchTrueOnFalse = false

    dispatch({ type: "LOGIN", payload: switchTrueOnFalse })
    localStorage.setItem('auth', 'false')
  }

  return (
    <div>
      <h1>Login is page</h1>
      <form onSubmit={submitLogin}>
        <Myinput text="text" placeholder="Write your login"/>
        <Myinput text="password" placeholder="Write your passord"/>
        <Mybutton>Sing in</Mybutton>
      </form>
    </div>
  );
};

export default Login;
