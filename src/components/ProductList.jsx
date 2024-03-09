import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retriveProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
  return response.data;
};

const ProductList = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retriveProducts,
  });
  if (isLoading) return <div>Fetching data...</div>;
  if (error) return <div>An error occured : {error.message}</div>;

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl my-2'>Product List</h1>
      <ul className='flex flex-wrap justify-center items-center'>
        {products &&
          products.map((product) => (
            <li
              key={product.id}
              className='flex flex-col items-center m-2 border rounded-sm'
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className='object-cover w-10 h-10'
              />

              <div>
                <p className='text-3xl my-2'>{product.title}</p>
                <button>show details</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
