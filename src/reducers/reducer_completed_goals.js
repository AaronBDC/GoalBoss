import {SET_COMPLETED, CLEAR_COMPLETED} from '../constants';

export default (state = [], action) => {
  switch(action.type){
    case SET_COMPLETED:
      const { completeGoals } = action;
      return completeGoals;
    case CLEAR_COMPLETED:
//      const { completeGoals } = action;
  //    completeGoals = removeById(state, action.id);
      return completeGoals;
    default:
      return state;
  }
}
