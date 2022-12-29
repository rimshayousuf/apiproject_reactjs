import { Box,Grid } from '@mui/material';
import './App.css';
import Store from './Store';
import Todolist from './Todolist';


function App() {
  return (
    <Box sx={{ flexGrow: 2 }}>
    <Grid container spacing={4}>
      <Grid item xs={6} lg={6} md={6}>
        {/* <Item>xs=8</Item> */}
        <Store/>
       {/* <Store label={'Fakestore'}
                    list={storedata}
                    value={getApiElement}/> */}
      </Grid>
      <Grid item xs={6} lg={6} md={6}>
        {/* <Item>xs=8</Item> */}
      <Todolist />
      </Grid>      
</Grid>
</Box>   
      
  );
}

export default App;
