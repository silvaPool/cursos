import './App.css'
import theme from './theme/theme'
import Duvidas from './components/Duvidas'
import Login from './pages/autenticacao/Login'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LayoutInterior from './components/LayoutInterior'
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
          </Routes>
        </Auth>

        {/* <LayoutInterior /> */}

      </ThemeProvider>

    </>
  )
}

export default App
