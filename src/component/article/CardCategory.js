import React from "react";
import { Card, Box, CardBody, Image, Stack, Text, Heading, Flex } from "@chakra-ui/react";

const CardCategory = ({image, title, heading, color}) => {
  const cardHoverStyles = {
    "&:hover": {
      height: '195px',
      transition: "height 500ms ease",
      
    },
  };
  return (
    
    <Card sx={cardHoverStyles} bg={color}minW='230px'  h='173px'>
      <CardBody>
        <Box h='132px' >
          <Flex align='center' gap='26px' direction='column' h='100%' w='100%'>
            <Image w='47px' src={image} alt={title} />
            <Stack spacing='4px' color='#333333'>
              <Heading size='sm' as='h3'>{heading}</Heading>
              <Text>{title}</Text>
            </Stack>
          </Flex>    
        </Box>
      </CardBody>
    </Card>     

  )
};

export default CardCategory;