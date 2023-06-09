import React from "react";
import { 
  Box, 
  Image, 
  Button, 
  Badge, 
  ListItem,
  UnorderedList, 
  Center,
  Text,
  Stack,
  Flex,
  VStack,
  Icon

} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

const TabBar = () => {
  return (
    <Box bg='#F8F8F8' w='100%' h='89px' bottom='0' display={{base:'block', md:'none'}} pos='fixed'>
      <Center h='100%'>
        <Box w='90%'>
          <Flex align='center' justify='space-between' color='#757575'>
            <VStack spacing={2}>
              <Icon boxSize={6} as={HamburgerIcon} />
              <Text>Home</Text>
            </VStack>
            <VStack spacing={2}>
              <Icon boxSize={6} as={HamburgerIcon} />
              <Text>Promotions</Text>
            </VStack>
            <VStack spacing={2}>
              <Icon boxSize={6} as={HamburgerIcon} />
              <Text>Others</Text>
            </VStack>
          </Flex>
        </Box>
      </Center>
    </Box>
  )
};

export default TabBar;