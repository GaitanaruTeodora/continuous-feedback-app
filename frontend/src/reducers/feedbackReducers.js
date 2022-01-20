import {
  FEEDBACK_REQUEST,
  FEEDBACK_SUCCESS,
  FEEDBACK_FAIL,
} from "../constants/feedbackConstants";

export const addFeedbackReducers = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK_REQUEST:
      return { loading: true };
    case FEEDBACK_SUCCESS:
      return { loading: false, info: action.payload };
    case FEEDBACK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const getFeedbackReducers = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK_REQUEST:
      return { loading: true };
    case FEEDBACK_SUCCESS:
      return { loading: false, listfeedbacks: action.payload };
    case FEEDBACK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
