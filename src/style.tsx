import { createTheme } from '@mui/material'


const useBodyStyle = {
    body: {    
        backgroundColor: "#FF7733",
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'        
    }
}

const theme = createTheme({
    spacing: 8,
    typography: {
    button: {
      textTransform: 'none',      
    },
      fontFamily: "Montserrat",
      h1: {
        fontWeight: 600,
        fontSize: '32px',
        color: '#FF7733',
        fontFamily: "Rubik"        
      },
      h2: {
        fontWeight: 600,
        fontSize: '24px',
        color: '#F7EF99',
        fontFamily: "Rubik"   
      },
      h4: {
        fontWeight: 800,
        fontSize: "24px",                
      },
      h5: {
        fontWeight: 600,
        fontSize: '20px',
        fontFamily: 'Rubik'
      },
      h3: {
        fontWeight: 800,
        fontSize: "24px",
        color: 'white'        
      },   
      subtitle1: {
        fontSize: "14px",
        fontWeight: 400,
        color: 'black',        
      },
      subtitle2: {
        fontSize: "16px",
        color: '#C7C7C7',
        fontWeight: 400,        
      }
    },
})

export {
    useBodyStyle,
    theme
}