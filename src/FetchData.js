import react from 'react';
import{useState,useEffect} from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';

const FetchData=()=>{
    const[Data,setData]=useState([]);

    const getData=async ()=>{
      const response = await fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-10-10&sortBy=popularity&apiKey=12e4f2419663442e871227574db19ac6");
        setData (await response.json());
        
    }
  
    useEffect(()=>{
    getData();
    },[]);
    console.log(Data)
    return(
      <>
      {    console.log(Data.articles) }
      <div>
          <h1>New articles</h1>
      </div>
     { 
       Data.articles.map((currentElement)=>{
       return(
           <>
          
           <Grid container spacing={4}  key={currentElement.author}> 
           <Grid item xs={12} md={4}>
        <Card sx={{  }}>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={currentElement.urlToImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {currentElement.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {currentElement.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      
      </Grid>
      </Grid>
      </>
            )
      })
    }
    </>
  )
    
    
    
};
export default FetchData