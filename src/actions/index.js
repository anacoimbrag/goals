import { SIGNED_IN, SET_GOALS, SET_COMPLETED_GOALS } from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }

  return action;
}

export function setGoals(goals){
  return {
    type: SET_GOALS,
    goals
  }
}

export function setCompletedGoals(goals){
  return {
    type: SET_COMPLETED_GOALS,
    goals
  }
}
