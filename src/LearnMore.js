import react from 'react';

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
function LearnMore({card,setCard}) {
console.log(card)



return(
<>
    <nav className="nav-Link"><div><h3><Link to="/">Home</Link></h3></div></nav>
    <h2 className="heading">{card.title}</h2>
<img className="image" src={card.urlToImage}/>
<div className="div1"><h4 className="description" >{card.description}</h4></div>
    <h4 className="author">~{card.author}</h4>
   
 <footer></footer>
</>
)
}

export default LearnMore;
