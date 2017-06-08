import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div style={{margin: '5px'}}>
        <div className="App">
        <div className="App-title"><em>Goal</em> <strong>BOSS</strong></div>
        <div className="App-tag-cap">

        <div className="App-tag">
        <h5><em>Getting things</em> <strong>DONE</strong></h5>
        </div>
        </div>
        <div className="AddGoal">
        <hr />
        <AddGoal />
        <hr />
        </div>
        <h4>Goals </h4>
        <div className="GoalList">

        <hr />
        <GoalList />
        <hr />
        </div>
        <h4>Complete Goals</h4>
        <div className="CompleteGoalList">
        <hr />
        <CompleteGoalList />
        <hr />
        </div>
        <button
            className="btn btn-danger"
            onClick={() => this.signOut()}
            >
              Sign Out
            </button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  //console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);
