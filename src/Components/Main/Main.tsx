import { Grid, Typography, ThemeProvider, Box } from '@mui/material'
import { theme, useBodyStyle } from '../../style'
import logo from '../../Resources/Images/logo1.png'
import codeness from '../../Resources/Images/codeness.png'
import arrow from '../../Resources/Gif/arrowUp.gif'


const Main = () => {
    const classes = useBodyStyle    

  return (
    <ThemeProvider theme={theme}>
        <Grid container xs={12} sx={classes.body}>            
            <Box sx={{width:'50%', height: '70%', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <img src={logo} alt="logo" style={{width:'240px', marginTop: '60px'}} />
            </Box>
            <Box sx={{width:'50%', height: '5%', display: 'flex', marginBottom:'20px', justifyContent:'center', alignItems:'center'}}>
                <img src={arrow} alt="arrow" style={{width:'42px'}} />
            </Box>
            <Box sx={{width: '95%', height:'5%', display: 'flex', marginBottom:'20px', justifyContent:'center', alignItems:'center'}}>
              <Typography variant='h3'>Yuk, Mulai Diskusi Bareng!</Typography>
            </Box>
            <Box sx={{width:'50%', height: '10%',display: 'flex', marginBottom:'20px', justifyContent:'center', alignItems:'flex-end'}}>
                <img src={codeness} alt="arrow" style={{width:'120px'}} />
            </Box>
        </Grid>
        <Grid className='slide-top' sx={{backgroundColor:"#FFFFFB", height: '100vh'}}>
          <Typography className='slide-top'>Heloo</Typography>
        </Grid>
    </ThemeProvider>
  )
}

export default Main