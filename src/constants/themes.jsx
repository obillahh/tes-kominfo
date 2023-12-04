import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Link: {
      baseStyle: {
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        _hover: {
          textDecoration: 'none',

          color: 'blue.200',
        }
      }
    }
  }
})

export default theme