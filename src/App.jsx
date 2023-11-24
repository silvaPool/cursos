import './App.css'
import theme from './theme/theme'
import { ThemeProvider } from '@mui/material'
import { Auth } from './context/AuthContext'
import Routes from './routes/AppRoutes';
import MyForm from './pages/estudante/Turma';
import { useEffect } from 'react';



function App() {

 

  return (
    <>

    {/* <section>
      <h1>Nirvana</h1>
      <button onClick={handleSignIn}>Sign-in</button>
      <button onClick={handleLogIn}>Log-in</button>
    </section> */}




      <ThemeProvider theme={theme}>
        <Auth>
          <Routes />
        </Auth>

      </ThemeProvider>

    </>
  )
}

export default App
