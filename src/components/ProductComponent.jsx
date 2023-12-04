// src/components/ProductCard.js
import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ProductCard = ({ product, onAddToCart }) => {
  const { title, price, image } = product;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
      <Image src={image} alt={title} mb="4" />
      <Text fontSize="lg" fontWeight="bold" mb="2">
        {title}
      </Text>
      <Text fontSize="md" mb="2">
        Price: ${price}
      </Text>
      <Button colorScheme="blue" onClick={() => onAddToCart(product)}>
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;
