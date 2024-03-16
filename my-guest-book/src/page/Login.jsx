import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginInWithEmailAndPassword, signInWithGoogle } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* handleSubmit */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginInWithEmailAndPassword(email, password);
      console.log(response);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  /* handleSocialLogin */
  const handleSocialLogin = async () => {
    const user = await signInWithGoogle();
    console.log(user);
    navigate("/home");
  };

  return (
    <div className='flex flex-col p-4 justify-center items-center'>
      <h1 className='text-3xl my-3'>Login</h1>
      <form className='flex flex-col'>
        <div className='form-control my-2'>
          <label htmlFor='email'>Email Address : </label>
          <input
            className='form-input'
            type='email'
            name='email'
            id='email'
            required
            placeholder='enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password'>Password : </label>
          <input
            className='form-input'
            type='password'
            name='password'
            id='password'
            required
            placeholder='enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className='mt-5 m-auto px-10 border py-2 rounded-md uppercase tracking-wider font-bold text-gray-500 hover:bg-gradient-to-r from-slate-300 to-slate-700 hover:text-gray-50 duration-500'
          type='submit'
          onClick={handleSubmit}
        >
          Login
        </button>
        <button
          className='mt-5 m-auto px-10 border py-2 rounded-md uppercase tracking-wider font-bold text-gray-500 hover:bg-gradient-to-r from-slate-600 to-slate-900 hover:text-gray-50 duration-500'
          type='submit'
          onClick={handleSocialLogin}
        >
          Sign In With Google
        </button>
      </form>
      <p className='mt-4'>
        Don't have an account?{" "}
        <NavLink
          className='hover:underline duration-300 hover:text-rose-500'
          to='/register'
        >
          Register
        </NavLink>
      </p>
      <p className='mt-4'>
        Forgot Password?{" "}
        <NavLink
          className='hover:underline duration-300 hover:text-rose-500'
          to='/reset'
        >
          Reset Your Password
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
