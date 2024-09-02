// src/pages/Pricing.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Pricing: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        Pricing
      </Typography>
      <Typography variant="body1">
        Discover our competitive pricing plans.
      </Typography>
    </Container>
  );
};

export default Pricing;
