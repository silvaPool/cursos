import './App.css'
import theme from './theme/theme'
import { ThemeProvider } from '@mui/material'
import { Auth } from './context/AuthContext'
import Routes from './routes/AppRoutes';

// import ChatBot from 'react-simple-chatbot';
 
// const steps = [
//     {
//         id: '0',
//         message: 'Hey Geek!',
//         end: true
//     }
// ];

function App() {


  return (
    <>

      <ThemeProvider theme={theme}>
        <Auth>
          <Routes />
        </Auth>

        {/* <div className="App">
          <h1>Welcome to Geeksforgeeks</h1>
          <ChatBot steps={steps} />
        </div> */}


      </ThemeProvider>

    </>
  )
}

export default App
