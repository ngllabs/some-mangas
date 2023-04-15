import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  // Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import MangaCard from "./components/MangaCard"
import './styles/index.css'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      {/* <Grid minH="100vh" p={3}> */}
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>

          <div className="container">
            <MangaCard />
          </div>

        </VStack>
      {/* </Grid> */}
    
    </Box>
  </ChakraProvider>
)
