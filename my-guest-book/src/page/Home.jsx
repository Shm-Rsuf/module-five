import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  /* handleSignout */
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) return <p>User info loading..</p>;
  return (
    <div>
      <p>Welcome, {user.email.split("@")[0].toUpperCase()}</p>
      <button
        className='mt-5 m-auto px-10 border py-2 rounded-md uppercase tracking-wider font-bold text-gray-500 hover:bg-gradient-to-r from-slate-300 to-slate-700 hover:text-gray-50 duration-500'
        type='submit'
        onClick={handleSignout}
      >
        SignOut
      </button>
    </div>
  );
};

export default Home;
