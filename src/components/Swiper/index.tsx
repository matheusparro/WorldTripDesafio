import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Image,Flex,Text,Box} from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs, Scrollbar, A11y } from 'swiper';
import styles from './styles.module.scss'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export function SwiperComp(){
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return(
    <Flex w="100%"  maxW="1140px" marginBottom="60px !important" bg="red.300"position="relative" align="center" justify="center">
     
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    color="red"
    className={styles.oi}
    >
      <SwiperSlide className={styles.oi}> 
      <Flex w="100%">
          <Image objectFit="cover" objectPosition="top"  height= {[163,400]} position="relative"w="100%" src="Europa.svg" alt="Segun Adebayo" />
          <Flex   color="gray.50"direction="column" height="100%" justify="center" position="absolute" w="100%" align="center">
            <Text fontWeight="bold" fontSize="48px">Europa</Text>
             <Text fontWeight="bold"fontSize="24px">O continente mais antigo </Text>
             
          </Flex>
        </Flex>
      </SwiperSlide>
      <SwiperSlide className={styles.oi}> 
      <Flex w="100%">
          <Image objectFit="cover" objectPosition="top"  height= {[163,400]} position="relative"w="100%" src="Europa.svg" alt="Segun Adebayo" />
          <Flex   color="gray.50"direction="column" height="100%" justify="center" position="absolute" w="100%" align="center">
            <Text fontWeight="bold" fontSize="48px">Brasil</Text>
             <Text fontWeight="bold"fontSize="24px">O continente mais legal </Text>
             
          </Flex>
        </Flex>
      </SwiperSlide>
    </Swiper>
    </Flex>
  );
}