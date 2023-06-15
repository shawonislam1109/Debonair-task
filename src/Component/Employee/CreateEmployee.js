import { Box, TextField } from '@mui/material';
import React from 'react';

const CreateEmployee = () => {

  
    return (
        <div>
         <h1 style={{textAlign:'center', font:'30px'}}>Employee Create</h1>
             <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 20, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    />
      <div style={{marginTop: '30px', display:'grid', gridColumn:'2', width:'30%', 
       marginLeft:'auto', marginRight:'auto', gap: '20px' }}>
        <TextField
          required
          id="outlined-required"
          label="First Name"
         
        />
        <TextField
          required
          id="outlined-required"
          label="Last name"
          
        />
        <TextField
          id="outlined-disabled"
          label="EmpID"
          type='number'
        />
        <TextField
          id="outlined-password-input"
          label="Division"
          type="text"
         
        />
        <TextField
          id="outlined-read-only-input"
          label="District"
        />
        </div>
        </div>
    );
};

export default CreateEmployee;