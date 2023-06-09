import React from "react";
import { Card, CardBody, Image, Stack, Text, Heading, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const CardTrending= ({data}) => {
  const cardHoverStyles = {
    "&:hover": {
      boxShadow: "none",
    },
  };

  return (
    <Card sx={cardHoverStyles} boxShadow='lg' bg={data.color} mb={30} w={{base:'402px',md:'287.5px'}} h='306px'>
      <CardBody>
        <Flex h='100%' direction='column' justify='space-around'>
        <Image alignSelf='start' h='120px' objectFit='contain' src={data.image()} alt={data.title} />
        <Stack>
          <Heading color='#333333' fontSize='2xl' as='h3'>{data.header}</Heading>
          <Text color='#8BAC3E'>{data.title}</Text>
        </Stack>
        <Flex>
          {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon h='19px'
                  key={i}
                  color={i < data.rating ? 'orange' : 'gray.300'}
                />
              ))
          }
          </Flex>
        </Flex>         
      </CardBody>
    </Card>
  )
};

export default CardTrending ;