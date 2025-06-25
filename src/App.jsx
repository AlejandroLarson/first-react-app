import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import './App.css'

import DataCard from './DataCard'
import cats from "./cats.json"


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

      <Grid spacing = {4} container>
        {cats.map((cat) => (
          <Grid>
          <DataCard
          title = {cat.name}
          imageURL = {cat.image}
          text = {cat.description}
          
        />
        </Grid>
        ))}
      </Grid>
    </>
  )
}

export default App

