import ProductList from "./components/ProductList";
import ProductsDetails from "./components/ProductsDetails";

const App = () => {
  return (
    <div className='flex bg-rose-600'>
      <ProductList />
      <ProductsDetails id={"1"} />
    </div>
  );
};

export default App;
