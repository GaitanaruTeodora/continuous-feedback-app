import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAccess } from "../actions/accessActions";
import axios from "axios";
import smiley from "../img/smiley.png";
import frowny from "../img/frowny.png";
import confuse from "../img/confuse.png";
import shock from "../img/shock.png";
import { addFeedback } from "../actions/feedbackActions";
import Table from "react-bootstrap/Table";

const grupe = [
  1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082,
  1083, 1084, 1085, 1086,
];

const Activities = (props) => {
  const dispatch = useDispatch();
  const [nrActivitate, setNrActivitate] = useState(0);
  const [grupaElevi, setGrupaElevi] = useState("1070");
  const [message, setMessage] = useState("");
  const [dataFeedback, setDataFeedback] = useState(null);
  const [eligibil, setEligibil] = useState(0);

  const ContentWrapper = styled.div`
    width: 100%;

    margin-top: 10vw;
  `;
  useEffect(() => {
    // props.info.map( info =>{
    //   props.activitiess.map( activitate => {
    //     info.cod===codAcces &&
    //   })
    // })
  }, [dispatch]);
  const trimiteCod = (id) => {
    props.activitiess.map(
      (activity) =>
        activity.id === id &&
        dispatch(
          addAccess(
            grupaElevi,
            activity.codAcces,
            props.userInfo.nume,
            props.userInfo.materie,
            activity.data,
            activity.durata,
            activity.oraIncepere,
            id
          )
        )
    );
    setMessage("Notificare trimisa");

    setTimeout(() => setMessage(""), 5000);
  };

  const trimiteFeedback = (emoji) => {
    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if (eligibil === 1) {
      dispatch(addFeedback(nrActivitate, time, emoji));
      setNrActivitate(0);
      setMessage("Feedback trimis!");
      setTimeout(() => setMessage(""), 5000);
      setEligibil(0);
    } else {
      setMessage("Activitatea nu este in desfasurare!");
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const acceseazaHandler = async (id) => {
    console.log(props.activitiess);

    await axios
      .get(`http://localhost:3000/api/feedbacks/${id}`)
      .then((res) => setDataFeedback(res.data));
  };

  const acceseazaActivitate = (id, data, oraIncepere, durata) => {
    console.log(props.info);
    setNrActivitate(id);
    setMessage("Feedback activitate " + id);

    var date = new Date(data);
    var today = new Date();
    var ora = parseInt(oraIncepere.split(":")[0]);
    var minute = parseInt(oraIncepere.split(":")[1]);
    durata = parseInt(durata);
    var start = 60 * minute + 3600 * ora;
    var end = 60 * (minute + durata) + 3600 * ora;

    var between =
      60 * parseInt(today.getMinutes()) + 3600 * parseInt(today.getHours());

    if (
      today.getFullYear() == date.getFullYear() &&
      today.getMonth() == date.getMonth() &&
      today.getDay() == date.getDay()
    ) {
      if (between >= start && between <= end) {
        setEligibil(1);
      }
    }
  };

  return (
    <div>
      {props.userInfo.hasOwnProperty("materie") ? (
        <div>
          <div className="d-flex justify-content-center">
            <Table striped bordered hover className="w-50 mt-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Denumire</th>
                  <th scope="col">Descriere</th>
                  <th scope="col">Data</th>
                  <th scope="col">Durata</th>
                  <th scope="col">Ora incepere</th>
                  <th scope="col">Cod acces</th>
                  <th>
                    Grupa{" "}
                    <select
                      id="dropdown"
                      value={grupaElevi}
                      onChange={(e) => setGrupaElevi(e.target.value)}
                    >
                      <option value="1070">1070</option>
                      <option value="1071">1071</option>
                      <option value="1072">1072</option>
                      <option value="1073">1073</option>
                      <option value="1074">1074</option>
                      <option value="1075">1075</option>
                      <option value="1076">1076</option>
                      <option value="1077">1077</option>
                      <option value="1078">1078</option>
                      <option value="1079">1079</option>
                      <option value="1080">1080</option>
                      <option value="1081">1081</option>
                      <option value="1082">1082</option>
                      <option value="1083">1083</option>
                      <option value="1084">1084</option>
                      <option value="1085">1085</option>
                      <option value="1086">1086</option>
                    </select>
                  </th>
                  <th scope="col">Feedback</th>
                </tr>
              </thead>
              <tbody>
                {}

                {props.activitiess.map((activity, index) =>
                  activity.idProfessor == props.userInfo.id ? (
                    <tr key={activity.id}>
                      <td>{index + 1}.</td>
                      <td>{activity.denumire}</td>
                      <td>{activity.descriere}</td>
                      <td>
                        {activity.data.split("T").map((val, idx) => {
                          return idx == 0 && <h6>{val}</h6>;
                        })}
                      </td>
                      <td>{activity.durata}</td>
                      <td>{activity.oraIncepere}</td>
                      <td>{activity.codAcces}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => trimiteCod(activity.id)}
                        >
                          Trimite
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => acceseazaHandler(activity.id)}
                        >
                          Acceseaza
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <h1></h1>
                  )
                )}
              </tbody>
            </Table>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            {dataFeedback !== null && (
              <div>
                <br></br>
                <div>
                  <Table striped bordered hover className="w-50 mt-5">
                    <thead>
                      <tr>
                        <th scope="col">Feedback</th>
                        <th scope="col">Emoji</th>
                        <th scope="col">Timp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {}

                      {dataFeedback.map((feedback, index) => (
                        <tr key={feedback.id}>
                          <td>{index + 1}.</td>
                          <td>
                            {feedback.emoji == "confuse" ? (
                              <h1>&#128533;</h1>
                            ) : feedback.emoji == "smiley" ? (
                              <h1>&#128512;</h1>
                            ) : feedback.emoji == "shock" ? (
                              <h1>&#128562;</h1>
                            ) : (
                              <h1>&#128577;</h1>
                            )}
                          </td>
                          <td>{feedback.timp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            )}
          </div>

          <br></br>
          <div className="d-flex justify-content-center">
            <h1>{message}</h1>
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-center">
            <Table striped bordered hover className="w-50 mt-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Profesor</th>
                  <th scope="col">Materie</th>
                  <th scope="col">Data</th>
                  <th scope="col">Ora incepere</th>
                  <th scope="col">Durata</th>
                  <th scope="col">Cod</th>
                </tr>
              </thead>
              <tbody>
                {props.info.map((info, index) =>
                  info.grupa == props.userInfo.grupa ? (
                    <tr key={info.id}>
                      <td>{index + 1}.</td>

                      <td>{info.nume}</td>
                      <td>{info.materie}</td>
                      <td>
                        {info.data.split("T").map((val, idx) => {
                          return idx == 0 && <h6>{val}</h6>;
                        })}
                      </td>
                      <td>{info.oraIncepere}</td>
                      <td>{info.durata} </td>
                      <td>{info.cod}</td>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => {
                          acceseazaActivitate(
                            info.idActivitate,
                            info.data,
                            info.oraIncepere,
                            info.durata
                          );
                        }}
                      >
                        Acceseaza
                      </button>
                    </tr>
                  ) : (
                    <p></p>
                  )
                )}
              </tbody>
            </Table>
          </div>

          {nrActivitate !== 0 && (
            <div className="container mt-3">
              <div className="row">
                <div
                  className="col"
                  onClick={() => {
                    trimiteFeedback("smiley");
                  }}
                >
                  <img class="img_format" src={smiley} />{" "}
                </div>
                <div
                  className="col"
                  onClick={() => {
                    trimiteFeedback("frowny");
                  }}
                >
                  <img class="img_format" src={frowny} />{" "}
                </div>
                <div className="w-100"></div>
                <div
                  className="col"
                  onClick={() => {
                    trimiteFeedback("confuse");
                  }}
                >
                  <img class="img_format" src={confuse} />{" "}
                </div>
                <div
                  className="col"
                  onClick={() => {
                    trimiteFeedback("shock");
                  }}
                >
                  <img class="img_format" src={shock} />{" "}
                </div>
              </div>
            </div>
          )}

          <div className="mt-3">
            <h1>{message}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
