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
  Flex

} from "@chakra-ui/react";
import mainIcon from '../../asset/icon/image 55.png'

const NavBar = () => {
  return (
    <Stack w='100%' h='96px'>
      <Center h='100%'>
        <Stack direction='row' w='90%'>
          <Center w='100%'>
            <Flex w='100%'                align='center'                   justify='space-between'
            >
              <Box>
               <Image boxSize={{base:'120px', md:'207px'}} objectFit='contain' src={mainIcon} alt='main icon'/>
              </Box>
              <Box display={{base:'none', lg:'block'}} as='nav'>
                <UnorderedList 
                color='#757575'
                display='flex'  listStyleType='none' h='22px' gap='32px'>
                  <ListItem>Home</ListItem>
                  <ListItem>About</ListItem>
                  <ListItem pos='relative'>
                    Promotions
                    <Badge
                      left='70%'
                      px='10px' py='3px' borderRadius='8px'  bottom='100%' pos='absolute'
                      variant='solid' colorScheme='red'>
                      HOT
                    </Badge>
                  </ListItem>
                  <ListItem>Blogs</ListItem>
                  <ListItem>Contact Us</ListItem>
                </UnorderedList>
              </Box>
              <Flex align='center'
              gap='24px'>
                <Text display={{base:'none', md:'block'}} color='#333333'>Masuk</Text>
                <Button maxW='147px' borderRadius='100px' bg='#8BAC3E' color='white'>Daftar Sekarang</Button>
              </Flex>
            </Flex>
          </Center>
        </Stack>
      </Center>
    </Stack>
  )
};

export default NavBar;