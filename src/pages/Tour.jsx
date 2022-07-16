import React from 'react'
import { 
  Container,
  Typography,
  Box,
  Paper,
  BottomNavigation,
} from '@mui/material'
import ImageCollage from '../components/ImageCollage'
import CustomizedAccordions from '../components/Accordian'
import BasicModal from '../components/Modal'
import { tourAtom } from '../Atom'
import { useRecoilState } from 'recoil'

const Tour = () => {
  const[tourState] = useRecoilState(tourAtom)
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant='h3' component='h1' marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{display: 'flex'}}>
        <img src={tourState.image} height={180}/>
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant='h6' component='h4' marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant='paragraph' component='p' marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Illum nobis reiciendis voluptas consequuntur suscipit, 
          atque itaque totam possimus, sed, distinctio architecto quaerat quasi cupiditate 
          voluptate explicabo necessitatibus ipsam facere officiis perferendis. 
          Enim repellat quasi expedita assumenda, adipisci deleniti mollitia aliquid!
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour