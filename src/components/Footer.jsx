import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1">Angelo Tiquio © 2024</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
