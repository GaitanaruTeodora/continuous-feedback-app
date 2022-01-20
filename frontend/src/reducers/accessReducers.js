import {
  ACCESS_CREATE_REQUEST,
  ACCESS_CREATE_SUCCESS,
  ACCESS_CREATE_FAIL,
  ACCESS_LIST_REQUEST,
  ACCESS_LIST_SUCCESS,
  ACCESS_LIST_FAIL,
} from "../constants/accessConstants";

export const accessCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case ACCESS_CREATE_REQUEST:
      return { loading: true };
    case ACCESS_CREATE_SUCCESS:
      return { loading: false, info: action.payload };
    case ACCESS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const accessListReducers = (state = {}, action) => {
  switch (action.type) {
    case ACCESS_LIST_REQUEST:
      return { loading: true };
    case ACCESS_LIST_SUCCESS:
      return { loading: false, info: action.payload };
    case ACCESS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
