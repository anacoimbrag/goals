import { SET_COMPLETED_GOALS } from '../constants';

export default (state = [], action) => {
    switch (action.type){
        case SET_COMPLETED_GOALS:
            const { goals } = action;
            return goals;
        default:
          return state;
    }
}
