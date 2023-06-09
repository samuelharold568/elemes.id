import React from "react";
import { Flex, Box, Center, } from "@chakra-ui/react";
import NavBar from "./Navbar";
import HeroTitle from "./HeroTitle";
import HeroIcon from "./HeroIcon";
import idon from '../../asset/image/115 1.png'

const Hero = () => {
  return (
    <Box backgroundImage={idon}
    backgroundSize={'cover'}
    backgroundPosition={'center'} h='100%' w='100%'>
    <Box pb='20px'
    backgroundColor='rgba(255, 255, 255, 0.9)'
     w='100%'>
      <NavBar />
      <Center >
        <Flex w='90%' align='center' justify='space-between'>
          <HeroTitle />
          <Box display={{base:'none', md:'block'}}>
            <HeroIcon />
          </Box>
        </Flex>
      </Center>
    </Box>
    </Box>

  )
};

export default Hero;