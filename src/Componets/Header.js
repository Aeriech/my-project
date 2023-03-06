import * as React from 'react';
import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Body from './Body';


export default function ButtonAppBar() {

  const [name,setShowName] = useState(true);

    const showName = () =>{
     if (name === true) {
       setShowName(false);
     } else {
       setShowName(true);
     }
    }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={showName}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            My Project
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    {name && <Body/>}
    </>
  );
}
function showAlert() {
    alert("You Clicked");
}

