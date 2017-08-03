import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoals from './CompleteGoals';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render(){
    return(
      <div style={{margin: '5%'}}>
        <div><h2>Goals</h2    ></div>
        <AddGoal />
        <hr />
        <h4>Pending Goals</h4>
        <GoalList />
        <hr />
        <h4>Completed Goals</h4>
        <CompleteGoals />
        <button className="btn btn-danger"
          onClick={() => this.signOut()}>Sign out</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{}
}

export default connect(mapStateToProps, null)(App);
