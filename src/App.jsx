import './App.css'
import theme from './theme/theme'
import Login from './pages/autenticacao/Login'
import {  Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LayoutInterior from './pages/estudante/LayoutInterior'
import Cadastro from './pages/autenticacao/cadastro'
import { ThemeProvider } from '@mui/material'
import { Auth } from './context/AuthContext'


function App() {


  return (
    <>

      <ThemeProvider theme={theme}>
        <Auth>
          <Routes>
            <Route path="/" element={<LandingPage />}>
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              </Route>
              <Route path="/estudante" element={<LayoutInterior />} />
          </Routes>
        </Auth>

        

      </ThemeProvider>

    </>
  )
}

export default App
