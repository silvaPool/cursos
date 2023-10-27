import './App.css'
import Reis from './components/Reis'
import Davi from './components/Header'
import Conteudo from './components/Conteudo'
import Informativo from './components/Informativo'
import Cursos from './components/Cursos'
import Depoimentos from './components/Depoimentos'
import theme from './theme/theme'
import { ThemeProvider } from '@mui/material';
import Duvidas from './components/Duvidas'
import Login from './pages/autenticacao/Login'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Beneficios from './components/Beneficios'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import LayoutInterior from './components/LayoutInterior'
import Cadastro from './pages/autenticacao/cadastro'


function App() {


  return (
    <>

      <ThemeProvider theme={theme}>

        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Route>
        </Routes>

        {/* <LayoutInterior /> */}

      </ThemeProvider>

    </>
  )
}

export default App
