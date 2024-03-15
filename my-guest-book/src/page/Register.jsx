import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUserWithEmailAndPassword } from "../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* handleSubmit */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await registerUserWithEmailAndPassword(email, password);
      console.log(user);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col p-4 justify-center items-center'>
      <h1 className='text-3xl my-3'>Register</h1>
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
          Register
        </button>
      </form>
      <p className='mt-4'>
        Already have an account?{" "}
        <NavLink
          className='hover:underline duration-300 hover:text-rose-500'
          to='/login'
        >
          Sign In
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
