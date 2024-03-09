import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retriveProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductsDetails = ({ id }) => {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retriveProduct,
  });
  console.log(product, error, isLoading);

  if (isLoading) return <div>Fetching Product Details</div>;
  if (error) return <div>An Error Occured:{error.message}</div>;

  return (
    <div className='w-1/5'>
      <h1>Product Details</h1>
      <div>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>USD {product.price}</p>
        <p>{product.rating}/5</p>
      </div>
    </div>
  );
};

export default ProductsDetails;
