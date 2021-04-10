import styles from '../styles/Home.module.css'
import {Flex,Image,Box} from '@chakra-ui/react'
export function Header(){
  return(
    <Box>
      <Flex
          as="header"
          w="100%"maxWidth={1480}
          h="24"
          align="center"
          justify="center"
          margin="0 auto"
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src="logo.svg"
          alt="Segun Adebayo"
        />
      </Flex>
    </Box>
  )
}