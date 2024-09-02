// src/Components/Footer.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: 3,
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
