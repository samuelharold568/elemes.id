import React from "react";
import { Stack, Heading, Text, Input, InputRightAddon, Icon, InputGroup } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

const NewsLetter = () => {
  return (
    <Stack mb='20px' spacing={33}>
      <Heading fontSize='md' as='h4'>
        NewsLetter
      </Heading>
        <Stack spacing={19}>
        <Text color='#757575'>
          Get now free 50% discount for alll products on your first order
        </Text>
        <InputGroup borderColor='black' w='250px'>
          <Input placeholder='Your email address' />
          <InputRightAddon color="white" bg="#8BAC3E" children='send' />
        </InputGroup>
        <Text><Icon color="#8BAC3E" as={EmailIcon} />  elemesid@gmail.com</Text>
        <Text><Icon color="#8BAC3E" as={PhoneIcon} /> 0888 1111 2222 </Text>
      </Stack>
    </Stack>
  )
};

export default NewsLetter;