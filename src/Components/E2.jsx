import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import user from '../Resources/icons/user.png';
import dot from'../Resources/icons/dot.png';
const E2 = ({Post,Name,email}) => {
   
    const intial=`${Name.split(' ')[0][0]}${Name.split(' ')[1][0]}`;
  
  return (
    <Box sx={{width:'auto',bgcolor:'rgba(255,255,255, 0.3)', display:'flex', flex:'wrap',alignItems:"center", justifyContent:'space-between',p:'0.5rem',color:'black'}}>
    <Box sx={{display:'flex'}}>
    <Avatar sx={{fontSize:'1.6vw',height:"4.5vw",width:"4.5vw",color:'black',fontWeight:'bold',bgcolor:'#C3B1E1'}}>{intial.toUpperCase()}</Avatar>
    <Box sx={{ pl:" 0.25rem"}}>  
    <Typography sx={{fontWeight:'bold', fontSize:'1.5vw'}}>{Name}</Typography>
     
    <Typography sx={{fontSize:'1vw',display:'flex',flexFlow:'wrap row'}}>
      <Avatar sx={{mt:'0.2vw',height:"1vw",width:"1vw"}} src={user}/> {Post}
      <Avatar  sx={{ mt:'0.5vw',height:"0.5vw",width:"0.5vw"}} src={dot}/>{email}
     </Typography>
     
    </Box>
    </Box>
   
 
</Box>
  )
}

export default E2
