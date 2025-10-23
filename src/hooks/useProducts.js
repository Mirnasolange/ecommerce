import { useCallback, useEffect, useState } from 'react';

const API_URL = 'https://fakestoreapi.com/products';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async (signal) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, signal ? { signal } : undefined);
      if (!response.ok) {
        throw new Error('No fue posible obtener los productos.');
      }
      const data = await response.json();
      setProducts(data);
    } catch (requestError) {
      if (requestError.name !== 'AbortError') {
        setError(requestError.message);
      }
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller.signal);
    return () => controller.abort();
  }, [fetchProducts]);

  const refresh = useCallback(() => fetchProducts(), [fetchProducts]);

  return { products, loading, error, refresh };
};

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      return undefined;
    }

    const controller = new AbortController();

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/${productId}`, { signal: controller.signal });
        if (!response.ok) {
          throw new Error('No fue posible obtener el producto.');
        }
        const data = await response.json();
        setProduct(data);
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    return () => controller.abort();
  }, [productId]);

  return { product, loading, error };
};
