import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { employeeUpdate } from '../Resources/Store/employeeSlice';
import{useSelector,useDispatch} from'react-redux';
import { csmUpdate } from '../Resources/Store/csmSlice';

const Employee = ({Name,Post}) => {
  
  const dispatch=useDispatch();
  const Csmdata=useSelector((store)=>store.Csm.csmdata);
  const permanent=useSelector((store)=>store.Employee.neverChange);
  
  const intial=`${Name.split(' ')[0][0]}${Name.split(' ')[1][0]}`;
  
  const handleClick=(e)=>{
    e.preventDefault();
    const redata=[...Csmdata];
    dispatch(csmUpdate(redata.filter((f)=>Name!==f.Name)));
    dispatch(employeeUpdate(permanent.filter((f)=>!Csmdata.includes(f))))
  }



  return (
       <Box sx={{width:'auto',bgcolor:'rgba(255,255,255, 0.3)', display:'flex', flex:'wrap',alignItems:"center", justifyContent:'space-between',p:'0.5rem',color:'black'}}>
       <Box sx={{display:'flex'}}>
       <Avatar sx={{fontSize:'1.8vw',height:"5vw",width:"5vw",color:'black',fontWeight:'bold',bgcolor:'#C3B1E1'}}>{intial.toUpperCase()}</Avatar>
       <Box sx={{ pl:" 0.25rem"}}>  
       <Typography  sx={{ fontSize:'1.8vw',fontWeight:'bold'}}>{Name}</Typography>
       <Typography   sx={{fontSize:'1.1vw',font:'arial'}}>{Post.split('-')[0]}</Typography>
       </Box>
       </Box>
     
      <IconButton onClick={handleClick} sx={{color:'#000C66',height:'3vw',width:'3vw'}}  aria-label="delete">
       <DeleteIcon />
       </IconButton>
       
    
   </Box>
  )
}

export default Employee;
