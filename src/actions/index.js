import { SIGNED_IN, SET_GOALS, SET_COMPLETED, CLEAR_COMPLETED } from '../constants';

export function logUser(email){
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}
export function setGoals(goals){
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export function setCompleted(completeGoals){
  const action = {
    type: SET_COMPLETED,
    completeGoals
  }
  return action;
}
//untested:
export function clearCompleted(id){
  const action = {
    type: CLEAR_COMPLETED,
    id
  }
  return action;
}
