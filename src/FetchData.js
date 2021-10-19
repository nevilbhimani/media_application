import react from "react";
import Hook from "./styletheme";
import LearnMore from "./LearnMore"
import { useState, useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { textAlign } from "@mui/system";
import Divider from "@mui/material/Divider";
const FetchData = ({card,setCard}) => {
  const [Data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-10-10&sortBy=popularity&apiKey=12e4f2419663442e871227574db19ac6"
    );
    setData(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(Data);

  const [currentPage, setCurrentPage] = useState(1);

  function changeData(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  let dataPerPage = 5;
  const indexOfFirst = currentPage * dataPerPage - dataPerPage;
  const indexOfLast = indexOfFirst + dataPerPage;
 
  return (
    <>
    
      <div >
        <h1 styles={{textAlign: "center"}}>New articles</h1>
      </div>
     
      <Divider/>

      <Stack spacing={2}>
        <Pagination count={10} onClick={changeData} color="primary" />
      </Stack>
      <Grid container spacing={4} className="grid">
        {Data.articles &&
          Data.articles
            .slice(indexOfFirst, indexOfLast)
            .map((currentElement) => {
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    xl={3}
                    justifyContent="space-evenly"
                    key={currentElement.publishedAt}
                  >
                    <Card elevation={12} className="cards">
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
                      {/* <Router>
                       <Switch>
                      <Route path ={currentElement.title.replaceAll(" ","/")} component={LearnMore} description={currentElement.description}/>
                                 </Switch>
                                 </Router> */}
                                  
                                 {/* {currentElement.title.replaceAll(" ","/")} */} 
                              
                                <Button
                          size="small"
                          onClick={()=>{
                            setCard(
                               currentElement
                            )
                          }}
                        >
                         <Link
                          to="/LearnMore">LearnMore</Link>
                        </Button>
                     
                             
                             
                      </CardActions>
                    </Card>
                  </Grid>
                </>
              );
            })}
      </Grid>
    </>
  );
};
export default FetchData;
