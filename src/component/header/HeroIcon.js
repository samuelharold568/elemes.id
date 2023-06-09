import React from "react";
import { Box, Image, Heading, Card,  CardBody, CardFooter, Stack, Center, Text, VStack } from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";
import mainIcon from '../../asset/icon/mainIcon.png';

const HeroIcon = () => {
  const property = {
    heading: 'Green Salad Tomato',
    title: 'Tomato',
    rating: 4,
  }

  return (
    <Box pos='relative'>
      <Box padding={{base:'15px', md:'44px'}} boxSize={{base:'40%', md:'412px'}} bg='yellow'  borderRadius='100%' >
        <Image w='100%' objectFit='contain' src={mainIcon} alt='main-icon' />        
      </Box>
      <Card 
        pos='absolute'  
        direction='row'
        variant='outline'
        maxW='292px'
        maxH='93px'
        top='80%'
        p='10px'
        left={{base:'20%', md:'-5%'}}
        borderRadius='17px'
        bg='rgba(255, 255, 255, 0.74)'
      > 
        <Center w='100%'>
          <Image maxH='53px' h='40px' objectFit='contain' src={mainIcon} alt='card-icon'/>
        <VStack>
          <CardBody>
            <Heading size='sm'>{property.heading}</Heading>
            <Text size='sm'  color='#757575'>
            {property.title}
            </Text>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon maxH='19px' h='10px'
                  key={i}
                  color={i < property.rating ? 'orange' : 'gray.300'}
                />
              ))}
          </CardBody>
        </VStack>
        </Center>
      </Card>
    </Box>
  )
};

export default HeroIcon;