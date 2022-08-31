import type { NextPage } from "next";
import {Box, Flex, Heading, HStack, Link, Stack, Text, Container, useColorModeValue} from "@chakra-ui/react";



const Footer: NextPage = () => {
    return (
        <>
             <Box
               
               bg={'black'}
               position="relative"
               maxHeight={'100%'}
               
              
               
               
               
      color={'white'}>
      <Container
        as={Stack}
        
        maxW={'6xl'}
        
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>©2022 Paperless. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Designed by Imuks</Link>

        </Stack>
        
      </Container>
    </Box>

               
        
        </>
      
    );
  };
  
  export default Footer;