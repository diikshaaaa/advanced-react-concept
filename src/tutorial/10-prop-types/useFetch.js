import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }); 
  // useCallback hook ruturns a callback function

  useEffect(() => {
    getProducts();
  }, [url]);
  return { loading, products };
  // this return is returning an object and 'loading' , 'products' are state values
};

export default useFetch;