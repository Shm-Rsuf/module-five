import { useState } from "react";
import { NavLink } from "react-router-dom";
import { passwordReset } from "../firebase";

const Reset = () => {
  const [email, setEmail] = useState("");
  return (
    <div className='flex flex-col p-4 justify-center items-center'>
      <h1 className='text-3xl my-3'>Reset Your Password</h1>
      <div className='form-control my-2 flex flex-col'>
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
        <button
          className='mt-5 m-auto px-10 border py-2 rounded-md uppercase tracking-wider font-bold text-gray-500 hover:bg-gradient-to-r from-slate-300 to-slate-700 hover:text-gray-50 duration-500'
          onClick={() => passwordReset(email)}
        >
          Send Password Reset Email
        </button>
      </div>
      <p className='mt-4'>
        Don't have an account?{" "}
        <NavLink
          className='hover:underline duration-300 hover:text-rose-500'
          to='/register'
        >
          Register
        </NavLink>
      </p>
    </div>
  );
};

export default Reset;
