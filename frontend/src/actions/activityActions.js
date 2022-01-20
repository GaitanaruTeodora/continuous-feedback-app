import {
  ACTIVITY_CREATE_REQUEST,
  ACTIVITY_CREATE_SUCCESS,
  ACTIVITY_CREATE_FAIL,
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_LIST_FAIL,
} from "../constants/activityConstants";
import axios from "axios";

export const addActivity =
  (denumire, descriere, dataa, durata, oraIncepere, codAcces, idProfesor) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ACTIVITY_CREATE_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:3000/api/addActivity`,
        {
          denumire: denumire,
          descriere: descriere,
          data: dataa,
          durata: durata,
          oraIncepere: oraIncepere,
          codAcces: codAcces,
          idProfessor: idProfesor,
        },

        config
      );

      dispatch({
        type: ACTIVITY_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACTIVITY_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const listActivities = () => async (dispatch) => {
  try {
    dispatch({
      type: ACTIVITY_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `http://localhost:3000/api/activities`,

      config
    );

    dispatch({
      type: ACTIVITY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACTIVITY_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
