import React from 'react'
import Employee from'./Employee';
import{useSelector} from'react-redux';
import { Avatar,Box,Divider } from '@mui/material';
import ForEmptyList from '../Resources/icons/ForEmptylist.png'

const CsmDisplay = () => {
  const Csmdata=useSelector((store)=>store.Csm.csmdata);
  
  return (
    <div>
     {Csmdata.length>0 ?Csmdata.map((props)=>
     <>
     <Employee key={props.id} Name={props.Name} Post={props.Post}/>
     <Divider/> 
     </> 
    
     ):<Box sx={{display:'flex',p:'1rem', justifyContent:'center',alignItems:'center'}}><Avatar variant="rounded" sx={{ width:'40%',height:'40%'}}src={ForEmptyList}/></Box>}
    </div>
  )
}

export default CsmDisplay;
