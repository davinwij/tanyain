import { Grid, Typography } from '@mui/material'
import './style.css'

type Props = {}

const Home = (props: Props) => {
  return (
    <Grid className='slide-top' sx={{backgroundColor:"#FFFFFB", height: '100vh'}}>
        <Typography className='slide-top'>Heloo</Typography>
    </Grid>
  )
}

export default Home