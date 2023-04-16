import * as React from "react"
import {
  ChakraProvider,
  // Box,
  // VStack,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
// import MangaCard from "./Components/MangaCard"
import './styles/global.css'

const Mangas = [
  {
    titulo:'Blue Lock',
    imagem:'https://static.zerochan.net/Blue.Lock.full.3890770.jpg',
    sinopse: 'A história acompanha a jornada de Isagi Yoichi, um garoto que pretende se tornar o maior atacante do mundo e ganhar a Copa do Mundo com seu país.',
    qcapitulos: 214,
  },
  {
    titulo:'Vagabond',
    imagem:'https://hitsite.com.br/wp-content/uploads/2022/12/vagabond.jpg',
    sinopse:'Vagabond narra a história real de Musashi Miyamoto , um espadachim criador do estilo de luta com duas espadas, é retratado as viagens de Musashi pelo Japão no período feudal em sua busca por realização fisica e espiritual.',
    qcapitulos: 328,
  },
  {
    titulo:'Hunter X Hunter',
    imagem:'https://sportshub.cbsistatic.com/i/2022/05/28/c5eaa231-f36a-425a-bffc-e1876bc01cd4/hunter-x-hunter.jpg',
    sinopse:'A série conta a história de Gon Freecss, um garoto de 12 anos que pretende se tornar um Hunter, um caçador de tesouros, lugares perdidos e criaturas estranhas. Contudo, ao contrário da maioria dos Hunters que procuram fama e dinheiro, o herói da história tem uma motivação maior para querer ser um caçador – encontrar seu pai – um dos mais famosos hunters do mundo.',
    qcapitulos: 400,
  },
  {
    titulo:'Haikyuu',
    imagem:'https://wegotthiscovered.com/wp-content/uploads/2022/01/Haikyuu-screenshot.jpg',
    sinopse:'A história gira em torno de Hinata Shoyo, um aluno do ensino médio que sonha em ser jogador de vôlei depois que assistiu a um campeonato pela televisão. O grande problema: ele é baixinho, e jogar vôlei com a rede daquela altura não é tarefa fácil. Mas Hinata já demonstra sua determinação e cria um clube de vôlei.',
    qcapitulos: 402,
  },
  {
    titulo:'Chainsaw Man',
    imagem:'https://uploads.cdn-funglr.net/2022/07/lawson-chainsawman-collabo-13.jpg',
    sinopse:'A história é protagonizada por Denji, um jovem que sofre para pagar as dívidas deixadas por seu pai após sua morte. Para isso, ele realiza trabalhos e mata demônios para a Yakuza, algo que ele consegue realizar graças a seu cão, Pochita, um cachorro demônio que ele resgatou.',
    qcapitulos: 132,
  }
]

export const App = () => (
  
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
      <div className="container">
        
          <main id="cards" className="grid">
            {Mangas.map((data, index) => (
            <article className="card-container">
              <img src={data.imagem} alt={data.titulo} className="card-imagem" />
              <div className="card-text">
                <h1 className="card-titulo">{data.titulo}</h1>
                <p className="card-sinopse">{data.sinopse}</p>
                <h6 className="card-qcapitulos">{data.qcapitulos} capítulos</h6>
              </div>
            </article>
            ))}
            
          </main>
      </div>
    {/* <Box textAlign="center" fontSize="sm">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>

          <div className="container">
            <MangaCard 
              titulo='Blue Lock'
              imagem='https://static.zerochan.net/Blue.Lock.full.3890770.jpg'
              sinopse= 'A história acompanha a jornada de Isagi Yoichi, um garoto que pretende se tornar o maior atacante do mundo e ganhar a Copa do Mundo com seu país.'
              qcapitulos={214}
            />
          </div>

        </VStack>
      </Grid>
    
    </Box> */}
  </ChakraProvider>
)
