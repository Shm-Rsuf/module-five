import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  /* handleFormSubmit */
  const handleFormSubmit = (formData) => {
    console.log(formData);
    const user = { email: "usuf@react.dev", password: "123456789" };

    const found =
      user.email === formData.email && user.password === formData.password;
    if (!found) {
      setError("root.random", {
        message: `User with email '${formData.email}' is not found`,
        type: "random",
      });
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-2/5 p-10 border'>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <FieldSet label='Enter Login Details'>
            <Field label='Email' error={errors.email}>
              <input
                {...register("email", { required: "Email is required" })}
                type='email'
                name='email'
                id='email'
                placeholder='Enter Email'
                className={`p-2 border box-border rounded-md w-[250px] outline-none ${
                  !!errors.email ? "border-rose-500" : " border-teal-100"
                }`}
              />
            </Field>
            <Field label='Password' error={errors.password}>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Your password must be at least 8 characters.",
                  },
                })}
                type='password'
                name='password'
                id='password'
                placeholder='Enter password'
                className={`p-2 border box-border rounded-md w-[250px] outline-none ${
                  !!errors.password ? "border-rose-500" : " border-teal-100"
                }`}
              />
            </Field>
          </FieldSet>
          <div className='text-rose-500'>{errors?.root?.random?.message}</div>
          <Field>
            <button className='w-1/4 text-lg border py-1 px-6 rounded-md cursor-pointer duration-300 bg-gray-500 text-white uppercase tracking-wide'>
              Login
            </button>
          </Field>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
