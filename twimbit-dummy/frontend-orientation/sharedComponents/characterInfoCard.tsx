import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CharacterInfoCard({characters}: any) {
    console.log("reached character info card")
    console.log(characters)
    return (
        <div>
          {characters.map((character: any) => (
            <Card key={character.id} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {character.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      );
 
}