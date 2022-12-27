import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectVariants(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      label={props.label}
      options={props.list}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    //   onChange={(e)=>{cd(e)}}
    />
  );
}
