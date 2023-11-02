import './App.css'
import theme from './theme/theme'
import { ThemeProvider } from '@mui/material'
import { Auth } from './context/AuthContext'
import Routes from './routes/AppRoutes';


function App() {


  return (
    <>

      <ThemeProvider theme={theme}>
        <Auth>
          <Routes />
        </Auth>

        

      </ThemeProvider>

    </>
  )
}

export default App
