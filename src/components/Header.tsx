import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { PersonOutline, Search, ShoppingCartOutlined } from '@mui/icons-material';

function Header() {
  return (
      <Box>
        <Box display='flex' flexDirection='column' justifyContent='start' alignItems='center' height='85px' bgcolor='#091625'>
          <Box sx={{width: '80vw', height: '100%'}}>
            <Grid container spacing={1} columns={12} height={'100%'} padding="10px 0px 18px" margin={'0px'}>
                <Grid item xs={2} height={'100%'}>
                    <Box sx={{width: '100%', height: '100%'}} bgcolor='#CED0D3'  display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Typography color={'#848A92'} fontSize={'13px'}>LOGO</Typography>
                    </Box>
                </Grid>
                <Grid item xs={7} height={'100%'} display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                    <Box sx={{width: '100%', paddingLeft: '40px', position: 'relative'}} display='flex' flexDirection='column' justifyContent='center' alignItems='start'>
                        <TextField id="search-field" placeholder="Search products" variant="standard" sx={{height: '40px', borderRadius: '20px', background: '#FFFFFF', width: '500px', maxWidth: '90%', padding: '0 0 0 20px'}} />
                        <Search sx={{height: '28px', width: '28px', position: 'absolute', top: '7px', left: '52px'}} />
                    </Box>
                </Grid>
                <Grid item xs={3} height={'100%'} display='flex' flexDirection='row' justifyContent='end' alignItems='center'>
                    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='start' sx={{cursor: 'pointer'}}>
                        <PersonOutline sx={{height: '25px', width: '25px', color: 'white', marginRight: '5px'}} />
                        <Typography fontSize={'15px'} color={'white'}>Sign in</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='start' paddingLeft={'15px'} sx={{cursor: 'pointer'}}>
                        <ShoppingCartOutlined sx={{height: '25px', width: '25px', color: 'white', marginRight: '5px'}} />
                        <Typography fontSize={'15px'} color={'white'}>Cart</Typography>
                    </Box>
                </Grid>
            </Grid>
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' justifyContent='start' alignItems='center' height='60px' bgcolor='#E6E8E9'>
          <Box sx={{width: '80vw', height: '100%'}} display='flex' flexDirection='row' justifyContent='start' alignItems='center' >
            <Typography fontSize={'15px'} color={'#535C67'} marginRight={'20px'} sx={{cursor: 'pointer'}}>All products</Typography>
            <Typography fontSize={'15px'} color={'#535C67'} marginRight={'20px'} sx={{cursor: 'pointer'}}>Packaging</Typography>
            <Typography fontSize={'15px'} color={'#535C67'} marginRight={'20px'} sx={{cursor: 'pointer'}}>Drinkware</Typography>
            <Typography fontSize={'15px'} color={'#535C67'} marginRight={'20px'} sx={{cursor: 'pointer'}}>Apparel</Typography>
            <Typography fontSize={'15px'} color={'#535C67'} marginRight={'20px'} sx={{cursor: 'pointer'}}>Notebooks</Typography>
            <Typography fontSize={'15px'} color={'#535C67'} marginRight={'20px'} sx={{cursor: 'pointer'}}>Backpacks</Typography>
          </Box>
        </Box>
      </Box>
  );
}

export default Header;