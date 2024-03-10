import { Controller, useFieldArray, useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import NumberInput from "../components/NumberInput";
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const { fields, remove, swap, move, append, prepend, insert } = useFieldArray(
    {
      name: "socials",
      control,
    }
  );

  /* handleRegisterSubmit */
  const handleRegisterSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-2/5 p-10 border'>
        <form onSubmit={handleSubmit(handleRegisterSubmit)}>
          <FieldSet label='Enter Your Details'>
            <Field label='Picture' error={errors.picture}>
              <input
                {...register("picture", { required: "Picture is required" })}
                type='file'
                name='picture'
                id='picture'
                placeholder='Enter Picture'
                className={`p-2 border box-border rounded-md w-[250px] outline-none ${
                  !!errors.picture ? "border-rose-500" : " border-teal-100"
                }`}
              />
            </Field>
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
            <Field label='Full Name' error={errors.fName}>
              <input
                {...register("fName", {
                  required: "Full name is required",
                })}
                type='text'
                name='fName'
                id='fName'
                placeholder='Enter Full Name'
                className={`p-2 border box-border rounded-md w-[250px] outline-none ${
                  !!errors.fName ? "border-rose-500" : " border-teal-100"
                }`}
              />
            </Field>
            <Field label='Age' error={errors.age}>
              <Controller
                name='age'
                control={control}
                defaultValue={1}
                render={({ field: { ref, ...field } }) => (
                  <NumberInput
                    id='age'
                    className={`p-2 border box-border w-full rounded-md ${
                      !!errors.age ? "border-red-500" : "border-gray-200"
                    }`}
                    {...field}
                  />
                )}
                rules={{
                  max: {
                    value: 100,
                    message: "Age can be between 0 and 100",
                  },
                }}
              />
            </Field>
          </FieldSet>

          <FieldSet label='Enter Your socials handles'>
            {fields.map((field, index) => {
              return (
                <div
                  className='flex justify-between items-center w-max'
                  key={field.id}
                >
                  <Field label='Social Name'>
                    <input
                      className='p-2 border box-border w-full rounded-md'
                      type='text'
                      {...register(`socials[${index}].name`)}
                      id={`socials[${index}].name`}
                      name={`socials[${index}].name`}
                    />
                  </Field>
                  <Field label='Social URL'>
                    <input
                      className='p-2 border box-border w-full rounded-md'
                      type='text'
                      {...register(`socials[${index}].url`)}
                      id={`socials[${index}].url`}
                      name={`socials[${index}].url`}
                    />
                  </Field>
                  <button
                    className='mt-8 mr-2 text-2xl'
                    onClick={() => remove(index)}
                  >
                    &#8722;
                  </button>
                </div>
              );
            })}
            <button
              className='mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto'
              onClick={() => append({ name: "", url: "" })}
            >
              Add A Social Handle
            </button>
          </FieldSet>

          <div className='text-rose-500'>{errors?.root?.random?.message}</div>
          <Field>
            <button className='text-center text-lg border py-1 px-6 rounded-md cursor-pointer duration-300 bg-gray-500 text-white uppercase tracking-wide'>
              Register
            </button>
          </Field>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
