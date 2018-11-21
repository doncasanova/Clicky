import React from "react";


const Navbar = (props) => (
    <nav class="navbar navbar-light bg-dark fixed-top">
  <span class="navbar-brand mb-0 h1 text-light">Clicky Game</span>
  <li className="card-text clickyCount list-inline-item navbar-nav">Clicky Count: { props.score}</li>
  <li className="card-text clickyWins list-inline-item navbar-nav">Clicky Wins: {props.wins}</li>
  <li className="card-text clickyLosses list-inline-item navbar-nav">Clicky Losses: {props.losses}</li>
</nav>
   
);

export default Navbar;
