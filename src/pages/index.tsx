import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Flex,Image,Box,Text, SimpleGrid ,Stack} from '@chakra-ui/react'
import { Header } from '../components/Header'
export default function Home() {
  return (
    <Flex  direction="column" h="100vh">
      <Header/>
      <Stack spacing="83px" align="center">
        <Flex w="100%">
          <Image objectFit="cover" objectPosition="top"  height= {[163,400]} position="relative"w="100%" src="Background.svg" alt="Segun Adebayo" />
          <Box position="absolute" w="100%">
            <Flex  w="100%" >
              <Flex direction="column" ml={["5","76","76","76",426]} >
                <Text mt={["12","14","16","20","24"]} color="gray.50"fontSize={[20,36]}>5 Continentes,</Text>
                <Text color="gray.50"fontSize={[20,36]}>infinitas possibilidades.</Text>
                <Text maxWidth="524px"   ml="5" mt="5" color="gray.50"fontSize={[20]}>Chegou a hora do papel a viagem que você sempre sonhou.</Text>
                
              </Flex>
              <Image w={["150px","230px","500px"]}ml={[0,4,50,100]} mt={["86px","100px"]}  src="Airplane.svg"/>
            </Flex>
          </Box>
        </Flex>
        <SimpleGrid gridTemplateColumns="1fr 1fr 1fr 1fr 1fr" width="100%"maxWidth={1440} margin="0 auto">
        <Box display="flex"  flexDirection="column" alignItems="center" justifyContent="center"><Image src="cocktail.svg"></Image><Text mt="23px">vida noturna</Text></Box>
          <Box display="flex"  flexDirection="column" alignItems="center" justifyContent="center"><Image src="surf.svg"></Image><Text mt="23px">praia</Text></Box>
          <Box display="flex"  flexDirection="column" alignItems="center" justifyContent="center"><Image src="building.svg"></Image><Text mt="23px">moderno</Text></Box>
          <Box display="flex"  flexDirection="column" alignItems="center" justifyContent="center"><Image src="museum.svg"></Image><Text mt="23px">clássico</Text></Box>
          <Box display="flex"  flexDirection="column" alignItems="center" justifyContent="center"><Image src="earth.svg"></Image><Text mt="23px">e mais...</Text></Box>    
        </SimpleGrid>
        
      
      </Stack>
    </Flex>
   

  )
}
