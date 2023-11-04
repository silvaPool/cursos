import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import button from "./button";

const theme = createTheme({
    typography: typography,

    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                    border: '1px solid white',
                    color: 'white',
                },

                contained: {
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',

                    '&:hover': {
                        backgroundColor: 'black',
                    },
                },

            },

        },

        MuiTypography: {
            styleOverrides: {
              customTypography: {
                fontSize: '18px', // ou qualquer estilo personalizado que você queira aplicar
                // outros estilos personalizados aqui
              },
            },
          },

        MuiAvatar: {
            styleOverrides: {
                root: {
                    border: '1px solid blue',
                    width: '60px',
                    height: '60px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '1rem',
                    color: 'white',
                    maxWidth: '350px',
                    height: '300px',
                    boxShadow: '2px 2px 10px white',
                    padding: '5px',


                },

            },

        },

        MuiCardContent: {
            styleOverrides: {
                root: {
                    textAlign: 'left',
                    height: '160px',
                    marginBottom: '30px',

                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    backgroundColor: 'black',
                    color: 'white',
                 
                    height: '60px',
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    backgroundColor: 'black',
                    color: 'white',
                    
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    marginBottom: '1rem',
                    borderRadius: '2rem',
                   
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'black',
                },
            },
        },
    },

});

export default theme;