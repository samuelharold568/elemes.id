import React from "react";
import { Stack, Heading, Text, } from "@chakra-ui/react";

const FooterAbout = () => {
  return (
    <Stack mb='20px' spacing={33}>
      <Heading fontSize='md' as='h4'>
        About Us
      </Heading>
      <Stack color='#757575' spacing={19}>
        <Text>About Us</Text>
        <Text>FAQ</Text>
        <Text>Report Problem</Text>
      </Stack>
    </Stack>
  )
};

export default FooterAbout;