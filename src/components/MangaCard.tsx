import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  
} from "@chakra-ui/react"

interface MangaProps {
  titulo: string;
  imagem: string;
  sinopse: string;
  qcapitulos: number;
}

export default function MangaCard(props:MangaProps){
    return(
      <Card maxW='xs'>
        <CardBody>
          <Image
            src={props.imagem}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='lg'> {props.titulo} </Heading>
            <Text>
              {props.sinopse}
            </Text>
            <Text color='blue.600' fontSize='xl'>
              {props.qcapitulos} capítulos
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='3'>
            <Button variant='solid' colorScheme='blue'>
              Ler
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Adicionar a lista
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    )
}