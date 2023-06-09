import React, { useState, useEffect } from 'react';
import SwiperCore, { Virtual, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardCategory from './CardCategory';
import { Box, Center, Button, Flex, Stack, Heading } from "@chakra-ui/react";
import { ChevronRightIcon , ChevronLeftIcon } from '@chakra-ui/icons';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../src/App.css';
SwiperCore.use([Virtual, Navigation ]);

const dataCategory = [
  {
    header: 'Cupcake',
    color: '#F0FEEB',
    title: '22 items',
    image: () => require('../../asset/icon/cupcake.png')
  },
  {
    header: 'Pizza',
    title: '25 items',
    color: '#E4F2F4',
    image: () => require('../../asset/icon/pizza 1.png')
  },
  {
    header: 'Kebab',
    title: '12 items',
    color: '#EAEEFA',
    image: () => require('../../asset/icon/kebab 1.png')
  },
  {
    header: 'Salmon',
    title: '22 items',
    color: '#F9EEF3',
    image: () => require('../../asset/icon/salmon 1.png')
  },
  {
    header: 'Doughnut',
    title: '11 items',
    color: '#F3F7D9',
    image: () => require('../../asset/icon/doughnut 1.png')
  }
];

const Category = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const newSlidesPerView = Math.floor(window.innerWidth  / 257); 
      setSlidesPerView(newSlidesPerView);
    };

    updateSlidesPerView(); 
    window.addEventListener('resize',updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  console.log('ini nilai slide perview', slidesPerView)

  return (
    <Box  h='573px' w='100%'>
      <Center h='100%' >
        <Stack w='90%'>
          <Heading color='#333333' mb='42.78px' as='h2'>
          Browser Our Category<br/>
          <Box color='#8BAC3E'>Receipt</Box>
          </Heading>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={slidesPerView}
            spaceBetween={11}
          >
          <Flex gap='11px' overflow='hidden' h='195px'>
            {dataCategory.map(item => (
              <SwiperSlide key={item.header}>
                <CardCategory 
                  heading={item.header}
                  title={item.title}
                  color={item.color}
                  image={item.image()}
                />
              </SwiperSlide>
            ))}
          </Flex>
          </Swiper>
          <Box display={{base:'none', md:'block'}}>
            <Flex mt='20px' gap='13px' justify='end'>
              <Button  onClick={() => swiperRef?.slidePrev()} w='113px' h='50px' color='white' borderRadius='100px' bg='#8BAC3E' leftIcon={<ChevronLeftIcon color='#8BAC3E'  boxSize='33px' borderRadius='100%' bg='white' />}>prev</Button>
              <Button onClick={() => swiperRef?.slideNext()} w='113px' h='50px' color='white' borderRadius='100px' bg='#8BAC3E' rightIcon={<ChevronRightIcon  color='#8BAC3E' boxSize='33px' bg='white' borderRadius='100%' />}>next</Button>
            </Flex> 
          </Box>
        </Stack>
      </Center>
    </Box>
  )
};

export default Category;