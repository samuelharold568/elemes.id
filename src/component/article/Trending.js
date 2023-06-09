import React from 'react';
import CardTrending from './CardTrending';
import { Box, Center, Flex, Stack, Heading, Button } from "@chakra-ui/react";
const dataCategory = [
  {
    header: 'Pizza Paperoni',
    title: 'Pizza',
    color: '#E6F3F5c',
    rating: 4,
    image: () => require('../../asset/image/Mask Group.png')
  },
  {
    header: 'Pizza Meat',
    title: 'Pizza',
    rating: 3,
    color: '#E6F3F5',
    image: () => require('../../asset/image/Mask Group-1.png')
  },
  {
    header: 'Doner Kebab',
    title: 'Kebab',
    rating: 5,
    color: '#EAEEFA',
    image: () => require('../../asset/image/Mask Group-2.png')
  },
  {
    header: 'Salmon Roll',
    title: 'Salmon',
    rating: 4,
    color: '#F9EEF3',
    image: () => require('../../asset/image/Mask Group-3.png')
  },
  {
    header: 'Cupcake Choco',
    title: 'Cupcake',
    rating: 4,
    color: '#F0FEEB',
    image: () => require('../../asset/image/Mask Group-4.png')
  },
  {
    header: 'Doughnut Milk',
    title: 'Doughnut',
    rating: 5,
    color: '#F3F7D9',
    image: () => require('../../asset/image/Mask Group-5.png')
  },
  {
    header: 'Doughnut Unicorn',
    title: 'Doughnut',
    rating: 4,
    color: '#F3F7D9',
    image: () => require('../../asset/image/Mask Group-6.png')
  },
  {
    header: 'Kathi Kebab',
    title: 'Kebab',
    rating: 4,
    color: '#EAEEFA',
    image: () => require('../../asset/image/Mask Group-7.png')
  }
];

const Trending = () => {
  return (
    <Box w='100%' minH='1039px'>
      <Center h='100%'>
        <Stack w='90%'>
          <Heading  color='#333333' mb='42.78px' as='h2'>
          Browser Our Category<br/>
          <Box color='#8BAC3E'>Receipt</Box>
          </Heading>
          <Flex wrap='wrap' justify='space-around'>
          {dataCategory.map(item => (
            <CardTrending
              key={item.header}
              data={item}
            />
          ))}
          </Flex>
          <Center mt={68}>
            <Button textAlign='center' bg='#8BAC3E' color='white' w='160px' 
            h='50px' borderRadius={100}>
              ALL Receipt
            </Button>
          </Center>
        </Stack>
      </Center>
    </Box>
  )
};

export default Trending;