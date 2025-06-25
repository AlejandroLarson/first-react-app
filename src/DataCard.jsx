import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

export default function DataCard({
    imageURL, title, text}) {
  return (
    <Card>
      <CardContent sx={{ pt: 0 , width: "250px" }}>
        <CardMedia
            component = "img"
            height = "250px"
            image = {imageURL}
        />
        <Typography 
        variant ="h5"
        align="center"
        >
            {title}
        </Typography>
        <Typography
        >{text}</Typography>
      </CardContent>
    </Card>
  );
}