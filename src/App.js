
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import FetchData from './FetchData';
import { Grid } from '@material-ui/core';
import * as React from 'react';
import LearnMore from './LearnMore';
import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 function App(){
   const [card,setCard]=useState({})
   useEffect(()=>{
   console.log(card)
    },[card] )
  return(<>
   {/* <FetchData  card={card} setCard={setCard}/> */}
 
   <Router>
          <Switch>
          
          <Route path ="/:title" ><LearnMore card={card} setCard={setCard}/></Route>
          <Route path="/" exact={true}  ><FetchData card={card} setCard={setCard}/></Route>
          </Switch>
          </Router>
  </>)
 }

export default App;
