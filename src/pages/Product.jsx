// src/components/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../redux/product/slice';
import axios from 'axios';
import { Box, SimpleGrid,  Spinner, Text, Center } from '@chakra-ui/react';
import { ENDPOINT_API_GET_LIST_PRODUCT } from '../constants/api';
import ProductCard from '../components/ProductComponent';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { list: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProductsRequest());
      try {
        const response = await axios.get(ENDPOINT_API_GET_LIST_PRODUCT);
        dispatch(fetchProductsSuccess(response.data));
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    // Add your logic for handling the "Add to Cart" action
    console.log('Product added to cart:', product);
  };

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt="4">
        <Text color="red.500">Error: {error}</Text>
      </Box>
    );
  }

  return (
    <Box>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </SimpleGrid>
  </Box>
  );
};

export default ProductPage;
