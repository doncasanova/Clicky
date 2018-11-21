import React from "react";
import clickyList from "../friends.json"
import Navbar from "./Navbar";
import Instructons from "./Instructons"
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately

// By extending the React.Component class, Counter inherits functionality from it
class ListClick extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    wins: 0,
    losses: 0,
    count: 0,
    clickyList,
    clickedOn: [],
    

  };
  // handleIncrement increases this.state.count by 1
  handleIncrement = (event) => {

    let newItem = (event.target.attributes['data-id'].value)
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    let clickedOn = this.state.clickedOn;
    let emptyArray = []
    for (var i = 0; i < clickedOn.length; i++) {
      var name = clickedOn[i];
      if (name === newItem) {
        this.setState({ count: 0 });
        this.setState(clickedOn = emptyArray);
        this.setState({ losses: this.state.losses + 1 });
      }
    }

    clickedOn.push(event.target.attributes['data-id'].value);
    this.setState({ clickedOn: clickedOn })

    // radomize clickyList on every click
    clickyList.sort(function (a, b) { return 0.5 - Math.random() });
    let youWon = this.state.count === 9
    if (youWon === true) {
      //updates wins 
      this.setState({ wins: this.state.wins + 1 });
      this.setState({ count: 0 });
      this.setState(clickedOn = emptyArray);
      // localStorage.setItem(this.state.wins)
      // console.log(localStorage.getItem(wins))
    }
  
  };
  render() {
    return (
      <div className="container">
        <Navbar score={this.state.count} wins={this.state.wins} losses={this.state.losses} />
        <div>
          <Instructons/>
          </div>
        <div className="jumbotron text-center">
          <div className="row d-flex justify-content-center">
                {
                  this.state.clickyList.map(item => {
                    return <div className="list-group-item m-2 " key={item.id}>
                      <a><img className="card-img-top" src={item.image} alt="clicky" data-id={item.id} onClick={this.handleIncrement} />
                      </a>
                    </div>
                  })
                }
            
          </div>
        </div>
      </div>
    );
  }
}


export default ListClick 