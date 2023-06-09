import React from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Box,
  Link
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
      Hai,, perkenalkan nama saya samuel harold wiradhika, seorang frontend developer. Ini adalah proyek tes awal internship di elemes.id, berikut adalah link website:<br/>
      <Box><Link color='blue' href='https://samuel-intern-tes-elemes.vercel.app/'>website</Link></Box>
      <Box><Link color='blue' href='https://github.com/samuelharold568/elemes.id'>link github</Link></Box>
      </Text>
      <Flex  gap='16px'>
        <Button color='white' px='18px' py='10px' borderRadius='100px' bg='#8BAC3E'>Daftar Sekarang</Button>
        <Button color='black' px='18px' py='10px' borderRadius='100px'  bg='#F2F2F2'>About Us</Button>
      </Flex>
    </Flex>
  )
};

export default HeroTitle;