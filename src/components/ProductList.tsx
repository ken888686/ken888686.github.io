import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../common';
import useProductsContext from '../hooks/use-products-context';

const StoreUrl = 'https://fakestoreapi.com';

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const context = useProductsContext();

  const getProducts = async () => {
    const response = await axios.get(`${StoreUrl}/products`);
    setProducts(response.data);
  };

  const renderList = () =>
    products.map((prod) => <li key={prod.id}>{prod.title}</li>);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Product List</h1>
      <ul>{renderList()}</ul>
    </>
  );
}

export default ProductList;
