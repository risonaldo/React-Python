import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/Professor'
import Lista from '../src/componets/Lista/Lista'

const Home: NextPage = () => {
  const professores:Professor[] = [
    {
      id:1,
      nome: "Professor 1",
      foto: "https://github.com/risonaldo.png",
      descricao: "Descrição do Professor 1",
      valor_hora: 100
    },
    {
      id:2,
      nome: "Professor 1",
      foto: "https://github.com/risonaldo.png",
      descricao: "Descrição do Professor 1",
      valor_hora: 200
    },
    {
      id:3,
      nome: "Professor 1",
      foto: "https://github.com/risonaldo.png",
      descricao: "Descrição do Professor 1",
      valor_hora: 300
    },
    {
      id:4,
      nome: "Professor 1",
      foto: "https://github.com/risonaldo.png",
      descricao: "Descrição do Professor 1",
      valor_hora: 400
    },
  ]

  return (
    <>
      <Box sx={{backgroundColor: 'secondary.main'}}>
        <Lista professores={professores}></Lista>
      </Box>
    </>
  )
}

export default Home
