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
                    width: '80%',
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

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    marginBottom: '1rem',
                    borderRadius: '2rem',
                   
                },
            },
        },
        
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    backgroundColor: '#07182E',
                    color: 'white',
                    textTransform: 'capitalize',
                    height: '70px',
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    backgroundColor: '#0C243A',
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
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: 'white',
                    
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'white',
                   
                }
            }
        }
    },

});

export default theme;