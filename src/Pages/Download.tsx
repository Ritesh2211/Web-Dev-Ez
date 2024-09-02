// src/pages/Download.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Download: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        Download
      </Typography>
      <Typography variant="body1">
        Download our app here.
      </Typography>
    </Container>
  );
};

export default Download;
