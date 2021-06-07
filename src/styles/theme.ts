import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors:{
    gray:{
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#F5F8FA",
    },
    cyan:{
      "700":"#47585B"
    },
    yellow:{

      "700":"#FFBA08"
    }
    
  },
  fonts:{
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles:{
    global:{
      body:{
        bg: 'gray.50',
        color:'cyan.700'
      },
     
    },
  },
  
})