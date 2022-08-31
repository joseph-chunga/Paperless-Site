import type { NextPage } from "next";
import { ReactElement } from "react";
import {Box, Flex, Heading, Stack, Icon, Text, SimpleGrid,} from "@chakra-ui/react";


interface FeatureProps {
    title: string;
    text: string;
    
     
}
  
const Feature = ({ title, text }: FeatureProps) => {
    return (
      <Stack>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SimpleThreeColumns() {
    return (
      <Box p={4}>
        <Text fontWeight={'600'} fontFamily={'Manrope'} fontSize={'40px'} fontStyle={'Semibold'} textAlign={'center'}>How it works?</Text>
        <br></br>
        <br></br>
        <br></br>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            
            title={'Convenient Storage'}
            text={
              'Provides  functionality to scan and store records in digital format that would later be linked to their respective physical files.'
            }
          />
          <Feature
            title={'User-friendly'}
            text={
              'Secure and easy to use search functionality that allows users to instantly locate and determine the movement of records within the organization.'
            }
          />
          <Feature
            
            title={'Reliable Backup'}
            text={
              'Ensures that loss of records is eliminated by automatically tracking records as well as maintaining their detailed usage histories including record users, locations, and any changes made along the way.'
            }
          />
        </SimpleGrid>
      </Box>
    );

}