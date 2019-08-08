import produce from 'immer';
import { SHOW_LOADER_SUCCESS, HIDE_LOADER_SUCCESS } from '../actions/loader';

const initialState = {
  loader: false
};

const loaderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_LOADER_SUCCESS:
        draft.loader = true;
        break;
      case HIDE_LOADER_SUCCESS:
        draft.loader = false;
        break;
      default:
        return state;
    }
  });

export default loaderReducer;
