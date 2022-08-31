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


const About: NextPage = () => {
    return (
        <>
        <Text>About Us</Text>
<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex flex={1}>
        <Image
          src="./paperless_picture2.jpg"
          alt={'Landing page image'}
          objectFit={'cover'}
          
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Paperless is a cloud-based file management system whose main  functionality  is the long-term and secure  storage of records in digital format for easy retrieval  and backup purposes.
          </Text>
          
        </Stack>
      </Flex>
      
    </Stack>

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Securely allows the  users to request for records from their workstations and receive automatic alerts if a file is in use, or has been requested by another user, etc.The System also posesses processes for record disposal with a clear approval workflow.

          </Text>
          
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          src="./paperless_picture3.jpg"
          alt={'Landing page image'}
          objectFit={'cover'}
          
        />
      </Flex>
    </Stack>

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      
    <Flex flex={1}>
        <Image
          src="./paperless_picture4.jpg"
          alt={'Landing page image'}
          objectFit={'cover'}
          
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Segregation of Active, Semi-Active and Inactive Records and also generates different reports/Alerts on the status of the records, system users so that users are always kept to date. 

          </Text>
          
        </Stack>
      </Flex>
      
    </Stack>

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Creates record classifications and automatically applies these to records and documents based on. This means that the features can be tailored to each organisation’s accepted  policies and procedures.

          </Text>
          
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          src="./paperless_picture5.jpg"
          alt={'Landing page image'}
          objectFit={'cover'}
          
        />
      </Flex>
    </Stack>


               
        
        </>
      
    );
  };
  
  export default About;