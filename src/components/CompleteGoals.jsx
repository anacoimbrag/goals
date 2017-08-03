import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';
import { setCompletedGoals } from '../actions';

class CompleteGoals extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        const key = goal.key;
        goals.push({email, title, key});
      })
      this.props.setCompletedGoals(goals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
          {
              this.props.completedGoals.map((goal, key) => {
                const { title, email } = goal;
                return (
                  <div key={key}>
                    <strong>{title}</strong>
                    <span> completed by <em>{email}</em></span>
                  </div>
                )
              })
          }
          <button className="btn btn-primary"
            onClick={() => this.clearCompleted()}>
            Clear all
          </button>
          <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { completedGoals } = state;
  return {
    completedGoals
  }
}

export default connect(mapStateToProps, {setCompletedGoals})(CompleteGoals)
