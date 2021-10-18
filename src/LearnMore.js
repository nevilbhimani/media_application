import react from 'react';

import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";
function LearnMore({card,setCard}) {
console.log(card)



return(
<>
    <nav className="nav-Link"><div><h3><Router><NavLink to="/">Home</NavLink></Router></h3></div></nav>
    {/* <h2>{card.title}</h2> */}

    
   
 <footer></footer>
</>
)
}

export default LearnMore;
