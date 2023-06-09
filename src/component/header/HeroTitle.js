import React from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Stack
} from "@chakra-ui/react";
import HeroIcon from "./HeroIcon";

const HeroTitle = () => {
  return (
    <Flex  maxW='482px' direction='column' gap='32px'>
      <Stack>
        <Heading size={{base:'2xl', md:'xl'}} color='#8BAC3E' as='h1'>Good Food Us<br/> Good Mood</Heading>
        <Stack mt='10%' mb='20%' display={{base:'block', md:'none'}}>
          <HeroIcon />
        </Stack>
      </Stack>
      <Text color='#757575'>
      I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
      </Text>
      <Flex  gap='16px'>
        <Button color='white' px='18px' py='10px' borderRadius='100px' bg='#8BAC3E'>Daftar Sekarang</Button>
        <Button color='black' px='18px' py='10px' borderRadius='100px'  bg='#F2F2F2'>About Us</Button>
      </Flex>
    </Flex>
  )
};

export default HeroTitle;