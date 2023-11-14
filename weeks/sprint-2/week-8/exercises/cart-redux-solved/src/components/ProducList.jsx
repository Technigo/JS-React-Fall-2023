import { useDispatch } from "react-redux";
import { addItem } from "../reducers/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  /*
   Passing Arguments to Event Handlers

     const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
   <button onClick={() => handleAddItem(product)}>Add to Cart</button>

 */

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
