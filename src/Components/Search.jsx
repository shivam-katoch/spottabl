import * as React from 'react';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import E2 from './E2'
import { Button, Divider} from '@mui/material'
import{useSelector,useDispatch} from'react-redux';
import { csmUpdate } from '../Resources/Store/csmSlice';
import { employeeUpdate } from '../Resources/Store/employeeSlice'; 


const Root = styled('div')(
  `
  color:rgba(0,0,0,.85);
  font-size: 14px;
`,
);



const InputWrapper = styled('div')(
  `
  width: 61vw;
  border: 1px solid #d9d9d9;
  background-color:white;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;
  margin-top:1vw;
  margin-right:5vw;
  minheight:3.1vw;
  &:hover {
    border-color:#40a9ff;
  }

  &.focused {
    border-color:rgba(0, 12, 102,0.6);
    
  }

  & input {
    background-color: #fff;
    color: rgba(0,0,0,.85);
    height: 3.1vw;
    font-size:1.6vw;
    color:gray;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
 `
  display: flex;
  align-items: center;
  height: 2.7vw;
  margin: 2px;
  
  font:1vw arial ;
  color:#000C66;
  line-height: 22px;
  background-color:#C3B1E1;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color:#40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
   height:1.5vw;
   width:1.5vw;
    cursor: pointer;
    padding:1vw;
    margin:0;
  }
`,
);

const Listbox = styled('ul')(
  `
  width: 55vw;
  
  padding: 0;
  position: absolute;
  list-style: none;
  background-color:white;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  -ms-overflow-style:none;
  ::-webkit-scrollbar{
      display:none;
  }

  
  
  & li {
   
    display: flex;

   
  }
    
   
    & span {
      flex-grow: 1;
      :hover { background-color:#C9BFBF;
               transition:0.3s;
               & svg {
                color:gray;
              }
             
     };
    }

    & svg {
      color:#CCCCFF;
    }
  }

  & li[aria-selected='true'] {
    background-color:;
    font-weight: 600;

    & svg {
      color:#CCCCFF;
    }
  }

  & li[data-focus='true'] {
    background-color:red;
    cursor: pointer;

    
  }
`,
);

export default function Search() {
  
const dispatch=useDispatch();
const userdata=useSelector((store)=>store.Employee.employee);
const Csmdata=useSelector((store)=>store.Csm.csmdata);
 
const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    getClearProps,
    value,
    focused,
    setAnchorEl,
   
  } = useAutocomplete({
    id: 'search',
    filterSelectedOptions: true,
    multiple: true,
    options:userdata,
    selectOnFocus:false,
    autoHighlight:true,
    
    getOptionLabel: (option) => `${option.email}${option.Name}`,
    
  });
 
 
const handleClick=(e)=>{
  e.preventDefault();
  const newEmployeedata=userdata.filter((e)=>!value.includes(e));
  const newCsmdata=[...Csmdata,...value];
 dispatch(csmUpdate(newCsmdata));
 dispatch(employeeUpdate( newEmployeedata));
 onClick();
   

}
 

const {onClick}={...getClearProps()};


  return (
    <Root>
      <div {...getRootProps()}>
       
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option, index) => (
            <StyledTag label={option.Name} {...getTagProps({ index })} />
          ))}

          <input placeholder='Add by Name or email'{...getInputProps()} />
       
          <Button sx={{ fontSize:'1vw', height:'3.1vw',bgcolor:'#000C66',borderBottomLeftRadius:'0',borderTopLeftRadius:'0'}} variant="contained" onClick={handleClick}>Add CSM</Button>
         
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <>
            <li {...getOptionProps({ option, index })}>
              <span><E2 Post={option.Post} Name={option.Name}email={option.email}/></span>
              
          
            </li>
            <Divider variant="middle" />
            </>
          ))}
        </Listbox>
      ) : null }
    </Root>
  );
}

