import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retriveProduct = async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data;
};

const ProductList = () => {
  const {
    data: productList,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retriveProduct,
  });
  if (isLoading) return <div>Fetching data...</div>;
  if (error) return <div>An error occured : {error.message}</div>;

  return (
    <div className='flex flex-col justify-center items-center w-3/5'>
      <h1 className='text-3xl my-1'>ProductList</h1>
      <ul>
        {productList &&
          productList.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
