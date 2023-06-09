import React from "react";
import { Center, Box
, Stack, Flex, Text } from "@chakra-ui/react";
import Address from "./Address";
import FooterCategory from "./FooterCategory";
import FooterAbout from "./FooterAbout";
import NewsLetter from "./NewsLetter";

const Footer = ()=> {
  return (
    <Box mt='191px' minH='359px' w='100%' as='footer'>
      <Center h='100%'>
        <Stack h='100%' w='90%'>
          <Center h='100%'>
          <Flex w='100%' direction={{base:'column', md:'row'}} p='5%' bg='#F9FFF6' justify='center' gap='5%'>
            <Address />
            <FooterCategory />
            <FooterAbout />
            <NewsLetter />
          </Flex>
          </Center>
          <Text textAlign='center' pt='48px' pb='32px' color='#757575'>© 2021 Elemes id. All rights reserved</Text>
        </Stack>
      </Center>
    </Box>
  )
};

export default Footer;