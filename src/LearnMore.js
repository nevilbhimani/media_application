import react from 'react';

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
function LearnMore({card,setCard}) {
console.log(card)



return(
<>
<div className="page">
    <nav className="nav-Link"><div><h3><Link to="/">Home</Link></h3></div></nav>
    <h2 className="heading">{card.title}</h2>
<img className="image" src={card.urlToImage}/>
<div className="div1"><h4 className="description" >{card.description}</h4></div>
    <h4 className="author">~{card.author}</h4>
   
 <footer className="footsection">developed by Nevil Bhimani</footer>
 </div>
</>
)
}

export default LearnMore;
