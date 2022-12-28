import { Box,Grid } from '@mui/material';
import './App.css';
import Store from './Store';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={6} lg={6} md={6}>
        {/* <Item>xs=8</Item> */}
       <Store />
      </Grid>
      <Grid item xs={6} lg={6} md={6}>
        {/* <Item>xs=8</Item> */}
        <Store />
      </Grid>      
</Grid>
</Box>   
      
  );
}

export default App;
