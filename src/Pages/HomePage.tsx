import React from 'react';
import { Container, Typography, Button, Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
      >
        <Typography variant="h2" component="h1" gutterBottom>
          SaaS Product
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Click on the button to Start.
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => alert('Welcome to the app!')}
        >
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Box
        id="features"
        sx={{ py: 8, backgroundColor: '#f4f4f4', textAlign: 'center' }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Features
        </Typography>
        <Typography variant="body1" paragraph>
          Discover the amazing features of our SaaS product.
        </Typography>
        {/* Add feature details or a component here */}
      </Box>

      {/* Download Section */}
      <Box
        id="download"
        sx={{ py: 8, textAlign: 'center' }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Download
        </Typography>
        <Typography variant="body1" paragraph>
          Download our product and start using it today.
        </Typography>
        {/* Add download information or links here */}
      </Box>

      {/* Pricing Section */}
      <Box
        id="pricing"
        sx={{ py: 8, backgroundColor: '#f4f4f4', textAlign: 'center' }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="body1" paragraph>
          Find out more about our pricing and plans.
        </Typography>
        {/* Add pricing details here */}
      </Box>

      {/* Register Section */}
      <Box
        id="register"
        sx={{ py: 8, textAlign: 'center' }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Register
        </Typography>
        <Typography variant="body1" paragraph>
          Sign up to get started with our SaaS product.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
        >
          Register Now
        </Button>
      </Box>

      {/* Footer */}
      <Box
        sx={{ py: 4, textAlign: 'center', backgroundColor: '#121212', color: 'white' }}
      >
        <Typography variant="body2" component="p">
          &copy; {new Date().getFullYear()} SaaS Product. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
