import React from 'react';
import Slider from 'react-slick';
import { Container, Typography, Card, CardContent, CardHeader, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Sample features data
const features = [
  {
    title: 'Feature 1',
    description: 'Description for Feature 1',
    image: 'https://via.placeholder.com/300'
  },
  {
    title: 'Feature 2',
    description: 'Description for Feature 2',
    image: 'https://via.placeholder.com/300'
  },
  {
    title: 'Feature 2',
    description: 'Description for Feature 2',
    image: 'https://via.placeholder.com/300'
  },
  {
    title: 'Feature 2',
    description: 'Description for Feature 2',
    image: 'https://via.placeholder.com/300'
  },
  {
    title: 'Feature 2',
    description: 'Description for Feature 2',
    image: 'https://via.placeholder.com/300'
  },
  {
    title: 'Feature 3',
    description: 'Description for Feature 3',
    image: 'https://via.placeholder.com/300'
  }
];

const Features: React.FC = () => {
  const theme = useTheme();
  
  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
        padding: 4,
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom align="center">
          Our Features
        </Typography>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <Card key={index} sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardHeader
                title={feature.title}
                sx={{ backgroundColor: theme.palette.background.paper }}
              />
              <CardContent>
                <img src={feature.image} alt={feature.title} style={{ width: '100%', height: 'auto' }} />
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Features;
