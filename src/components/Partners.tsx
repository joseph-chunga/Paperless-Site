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


const Partners: NextPage = () => {
    return (
        <>

            <Box paddingLeft={'90px'}>
                    <Text>Our amazing partners include:</Text>
                    <br></br>
                    <Image src="./WARMA_logo-1.png" alt={'Warma Logo'} objectFit={'cover'} />
            </Box>

               
        
        </>
      
    );
  };
  
  export default Partners;