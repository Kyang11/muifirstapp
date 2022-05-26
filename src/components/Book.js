import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
              {/* Insert BOOK image here 
                
                component="img"
                height="230"
                image=""https:
                alt="green iguana"
            />*/}
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {/* Book Tittle  */}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {/* Author name  */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {/* Abstract about the book */}
            
                </Typography>
                <Typography variant="body2" color="text.secondary">
                     100 pages
            
                </Typography>
                
                
            </CardContent>
            <CardActions>
                <Button size="small">Add</Button>
                <Button size="small">Remove</Button>

                {/* below is the formGroup code that is here if you want to remove later */}
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Read/Unread" />
                </FormGroup>

                {/* <Button size="small">Read</Button>
        <Button size="small">Unread</Button> */}

            </CardActions>
        </Card>
    );
}