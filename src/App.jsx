import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './App.css'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import characters from './protagonists.json'

function App() {
  return (
    <>
      
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Cat Catalog
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Kitties available to adopt
        </Typography>
      </Container>

      <Container maxWidth="lg">
  <Grid container spacing={2}>
    <Grid>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="cat_images/cat_1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sprinkles
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Sprinkles is a wonderful little kitten looking for a good home.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
          <Grid>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="cat_images/cat_2.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shrimp
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Shrimp is a kitten that loves attention and can play all day.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
          <Grid>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="cat_images/cat_3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ferrari
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Ferrari is a sweet kitten discovered at a local junkyard, hence the name.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
  </Grid>

      </Container>
    </>
  )
}

export default App

