import type { NextPage } from "next";
import {Box, 
        Flex, 
        Heading, 
        HStack, 
        Link, 
        Icon,
        Text, 
        Stack, 
        Image,
        Button,
        useBreakpointValue,
} from "@chakra-ui/react";


const Hero: NextPage = () => {
    return (
        <>
<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Management of office files has never been easier.
            </Text>
            <br />{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Keeping your office documents only in physical form poses the risks of fire, flood or burglary and becomes a bit cumbersome over time. What if you want to access one of those important files away from the office? Meet Paperless. The most user-friendly Document Management system which is  not only amazingly easy to use but also highly secure and affordable .
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Learn More
            </Button>
            <Button rounded={'full'} bg={'pink.400'}> Live Demo</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          src="./paperless_picture1.jpg"
          alt={'Landing page image'}
          objectFit={'cover'}
          
        />
      </Flex>
    </Stack>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    

               
        
        </>
      
    );
  };
  
  export default Hero;