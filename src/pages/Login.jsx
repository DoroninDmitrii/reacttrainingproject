import React from 'react';
import Mybutton from '../components/UI/button/Mybutton';
import Myinput from '../components/UI/input/Myinput';

const Login = () => {
  return (
    <div>
      <h1>Login is page</h1>
      <form>
        <Myinput text="text" placeholder="Write your login"/>
        <Myinput text="password" placeholder="Write your passord"/>
        <Mybutton>Sing in</Mybutton>
      </form>
    </div>
  );
};

export default Login;
