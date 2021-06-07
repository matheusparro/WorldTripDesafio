import Head from 'next/head'
import {Flex,Image,Box,Text, SimpleGrid ,Stack,Divider,Heading, HStack} from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { SwiperComp } from '../../components/Swiper'
export default function Home() {
  return (
    <Flex  direction="column" h="100vh">
      <Header/>
      <Stack spacing="83px" align="center">
     
      <Flex w="100%">
          <Image objectFit="cover" objectPosition="top"  height= {[300,400]} position="relative"w="100%" src="Europa.svg" alt="Segun Adebayo" />
          <Box position="absolute" w="100%">
            <Flex  w="100%" maxWidth={[200,1140]}
            
            align="center"
            justify="left"
            margin="0 auto" >
              <Flex direction="column" >
                <Text fontWeight="bold"  mt="250" color="gray.50"fontSize={[20,36]}>Europa</Text>
                
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Stack  spacing="83px"maxWidth={1140} margin="0 auto">
        <SimpleGrid  gridTemplateColumns="1fr 1fr" width="100%">
          <Text color="cyan.700"fontSize={24}>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
          <SimpleGrid gridTemplateColumns="1fr 1fr 1fr" width="100%" margin="0 auto">
            <Box display="flex"  flexDirection="column" alignItems="center" justifyContent="center"><Text color ="yellow.700"fontSize={48} fontWeight="semibold"> 50</Text><Text color="cyan.700">países</Text></Box>
            <Box display="flex"  flexDirection="column" alignItems="center" justifyContent="center"><Text color ="yellow.700"fontSize={48} fontWeight="semibold"> 50</Text><Text color="cyan.700">línguas</Text></Box>
            <Box display="flex"  flexDirection="column" alignItems="center" justifyContent="center"><Text color ="yellow.700"fontSize={48} fontWeight="semibold"> 50</Text><Text color="cyan.700">cidades +100</Text></Box>

          </SimpleGrid>

        </SimpleGrid>
          <Box fontWeight="medium" fontSize={36} color="cyan.700" justifyContent="left" width="100%">
          Cidades +100
          </Box>
          <HStack spacing="45px">
            <Box>Oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Box>
            <Box>Oiiiiiiiiiiiiiiiiiiiiiiiii</Box>
            <Box>Oiiiiiiiiiiiiiiiiiiiiiiiii</Box>
            <Box>Oiiiiiiiiiiiiiiiiiiiiiiiii</Box>
            <Box>Oiiiiiiiiiiiiiiiiiiiiiiiii</Box>
            <Box>Oiiiiiiiiiiiiiiiiiiiiiiiii</Box>
          </HStack>
        </Stack>

        
       </Stack>
     </Flex>
   

  )
}
