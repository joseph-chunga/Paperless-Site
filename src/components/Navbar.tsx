import type { NextPage } from "next";
import {Box, Flex, Heading, HStack, Link, Icon} from "@chakra-ui/react";

const Navbar: NextPage = () => {
    return (
        <>
        <Flex
      px="20px"
      py="20px"
      width="full"
      bg="black"
      alignItems="left"
      justifyContent="space-between"
    >
      <Flex alignItems="flex-end">
        <Heading
          color="whiteAlpha.900"
          mr="60px"
          fontSize={20}
          
        >
          Paperless
        </Heading>
        
      </Flex>
      
    </Flex>
        
        </>
      
    );
  };
  
  export default Navbar;