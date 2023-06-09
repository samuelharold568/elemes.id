import React from "react";
import { Stack, Image, Text, HStack, Icon } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaInstagram } from 'react-icons/fa';
import mainImage from '../../asset/icon/image 55.png';

const Address = () => {
  const buttonHoverStyles = {
    "&:hover": {
      backgroundColor: "#8BAC3E",
      color: "white",
      borderRadius: "100%"
    },
  };

  return (
    <Stack mb='20px' spacing={33} w='45%'>
      <Image objectFit='contain' h='50px' w='207px' src={mainImage} alt='elemes.id' />
      <Text  color='#757575'>
      Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
      Kecamatan Setiabudi, Kota Jakarta Selatan, 
      Daerah Khusus Ibukota Jakarta 12950
      </Text>
      <HStack spacing={19}>
        <Icon  sx={buttonHoverStyles} p='10px' color="#8BAC3E" as={EmailIcon} boxSize={10} />
        <Icon sx={buttonHoverStyles} p='10px' color="#8BAC3E" as={PhoneIcon} boxSize={10} />
        <Icon sx={buttonHoverStyles} p='10px' color="#8BAC3E" as={FaInstagram} boxSize={10} />
      </HStack>
    </Stack>
  )
};

export default Address;