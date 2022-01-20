import {
  FEEDBACK_REQUEST,
  FEEDBACK_SUCCESS,
  FEEDBACK_FAIL,
} from "../constants/feedbackConstants";
import axios from "axios";

export const addFeedback = (idActivitate, timp, emoji) => async (dispatch) => {
  try {
    dispatch({
      type: FEEDBACK_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `http://localhost:3000/api/feedbacks/addFeedback`,
      { idActivitate: idActivitate, timp: timp, emoji: emoji },

      config
    );

    dispatch({
      type: FEEDBACK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FEEDBACK_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getFeedback = (idActivitate) => async (dispatch) => {
  try {
    dispatch({
      type: FEEDBACK_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `http://localhost:3000/api/feedbacks/${idActivitate}`,

      config
    );

    dispatch({
      type: FEEDBACK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FEEDBACK_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
