import React from "react";
import { VStack, Text, Box, Center } from "native-base";

export default function MainScreen() {
   return (
       <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1} >
           <VStack space={5} alignItems="center">
               <Box width={30}>
                   <Text>Hello World</Text>
               </Box>
           </VStack>
       </Center>
   )
}