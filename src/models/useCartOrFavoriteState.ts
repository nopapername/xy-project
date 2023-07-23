import { Product } from '@/pages/products';
import { useState } from 'react';

export default function useCartOrFavoriteState() {
  const [cartList, setCartList] = useState<Product[]>([]);
  const [favoriteList, setFavoriteList] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product[]>([]);

  return {
    cartList,
    favoriteList,
    currentProduct,
    setCartList,
    setFavoriteList,
    setCurrentProduct,
  };
}
