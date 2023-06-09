import React from "react";
import { Stack, Heading, Text, } from "@chakra-ui/react";

const FooterCategory = () => {
  return (
    <Stack mb='20px' spacing={33}>
      <Heading fontSize='md' as='h4'>
        Categories
      </Heading>
      <Stack color='#757575' spacing={19}>
        <Text>Cupcake</Text>
        <Text>Pizza</Text>
        <Text>Kebab</Text>
        <Text>Salmon</Text>
        <Text>Dougnut</Text>
      </Stack>
    </Stack>
  )
};

export default FooterCategory;