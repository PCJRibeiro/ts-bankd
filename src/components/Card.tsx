import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { Layout } from "./Layout"


export const Card = () => {
  return (
    <Layout>
      <ChakraProvider>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Center>
            <Box backgroundColor='#000' borderRadius='25px' padding='15px' >
              <Center color='#fff'>
                <h1>Faça o login</h1>
              </Center>
              <Input placeholder="email" backgroundColor='#ffff' marginBottom='3px' />
              <Input placeholder="password" backgroundColor='#ffff' />
              <Center>
                <Button onClick={login} colorScheme='purple' size='sm' width='100%' marginTop='5px'>
                  Entrar
                </Button>
              </Center>
            </Box>
          </Center>
        </Box>
      </ChakraProvider>
    </Layout>
  )
}