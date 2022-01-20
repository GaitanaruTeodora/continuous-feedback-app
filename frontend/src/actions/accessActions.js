import {
  ACCESS_CREATE_REQUEST,
  ACCESS_CREATE_SUCCESS,
  ACCESS_CREATE_FAIL,
  ACCESS_LIST_REQUEST,
  ACCESS_LIST_SUCCESS,
  ACCESS_LIST_FAIL,
} from "../constants/accessConstants";
import axios from "axios";

export const addAccess =
  (grupa, cod, nume, materie, dataa, durata, ora, id) => async (dispatch) => {
    try {
      dispatch({
        type: ACCESS_CREATE_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:3000/api/addAccess`,
        {
          grupa: grupa,
          cod: cod,
          nume: nume,
          materie: materie,
          data: dataa,
          durata: durata,
          oraIncepere: ora,
          idActivitate: id,
        },

        config
      );

      dispatch({
        type: ACCESS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACCESS_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const listAccess = () => async (dispatch) => {
  try {
    dispatch({
      type: ACCESS_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `http://localhost:3000/api/access`,

      config
    );

    dispatch({
      type: ACCESS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACCESS_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
