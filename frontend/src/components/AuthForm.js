import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./AuthForm.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

import { Row, Col } from "react-bootstrap";
import img from "../img/learn.png";
const AuthForm = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isStudent, setIsStudent] = useState(true);
  const [grupa, setGrupa] = useState("1070");
  const [materie, setMaterie] = useState("Tehnologii Web");
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  useEffect(() => {
    if (userInfo) {
      console.log("exist");
      navigate("/home");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, parola)).then((resp) => console.log(resp));
    if (!userInfo) {
      setMessage("Email-ul sau parola nu corespund !");
    }
  };

  const verificStatus = (status) => {
    if (status.statusText === "OK") {
      dispatch(login(email, parola));
      setIsLogin(true);
    } else {
      setMessage("Adresa de email exista in baza de date!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nume === "" || prenume === "") {
      setMessage("Toate campurile sunt obligatorii !");
    } else if (email.includes("@") === false) {
      setMessage("Adresa de email introdusa nu are format corespunzator !");
    } else if (parola.length < 6) {
      setMessage("Parola trebuie sa contina cel putin 6 caractere !");
    } else {
      if (isCreate === false) {
        if (isStudent) {
          const requestOptions = {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              email: email,
              nume: nume,
              prenume: prenume,
              grupa: grupa,
              parola: parola,
            }),
          };
          console.log(requestOptions);

          try {
            const response = await fetch(
              "http://localhost:3000/api/students/addStudent",
              requestOptions
            ).then((resp) => verificStatus(resp));
          } catch (err) {
            console.log(err);
          }

          setNume("");
          setGrupa("1070");
          setPrenume("");
          setEmail("");
          setParola("");
        } else {
          const requestOptions = {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              email: email,
              nume: nume,
              prenume: prenume,
              materie: materie,
              parola: parola,
            }),
          };
          console.log(requestOptions);

          try {
            const response = await fetch(
              "http://localhost:3000/api/professors/addProfessor",
              requestOptions
            ).then((resp) => verificStatus(resp));
          } catch (err) {
            console.log(err);
          }

          setNume("");
          setPrenume("");
          setEmail("");
          setParola("");
          setMaterie("Tehnologii Web");
        }
      } else {
      }
    }
  };

  return (
    <div>
      <Row>
        <Col md={6}>
          <img className="w-100" src={img} />
        </Col>
        <Col md={6} className="mt-3">
          <section className="auth">
            {isLogin ? (
              <form>
                <h1>Login</h1>

                <div className="control">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="control">
                  <label htmlFor="password">Your Password</label>
                  <input
                    type="password"
                    id="password"
                    required
                    value={parola}
                    onChange={(e) => {
                      setParola(e.target.value);
                    }}
                  />
                </div>
                <div className="actions">
                  <button onClick={submitHandler} className="text-white">
                    Login
                  </button>
                  <button
                    type="button"
                    className="toggle"
                    onClick={switchAuthModeHandler}
                  >
                    Create new account
                  </button>
                </div>
                {error && <h1>{error}</h1>}
              </form>
            ) : (
              <form>
                <h1>Sign up</h1>
                <div className="radioButtons">
                  <label>
                    <input
                      type="radio"
                      value={isStudent}
                      id="male"
                      onChange={(e) => {
                        setIsStudent(true);
                      }}
                      name="student"
                    />
                    <label for="student">
                      {" "}
                      <h5>Student</h5>
                    </label>
                    <br />

                    <input
                      type="radio"
                      value={isStudent}
                      id="female"
                      onChange={(e) => {
                        setIsStudent(false);
                      }}
                      name="student"
                    />
                    <label for="student">
                      <h5>Profesor</h5>
                    </label>
                  </label>
                </div>
                <br></br>
                {isStudent ? (
                  <div className="control">
                    <label>Grupa</label>
                    <select
                      className="dropdown"
                      id="dropdown"
                      value={grupa}
                      onChange={(e) => setGrupa(e.target.value)}
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
                  </div>
                ) : (
                  <div className="control">
                    <label>Materie</label>
                    <select
                      className="dropdown"
                      id="dropdown"
                      value={materie}
                      onChange={(e) => setMaterie(e.target.value)}
                    >
                      <option value="Tehnologii Web">Tehnologii Web</option>
                      <option value="DAM">DAM</option>
                      <option value="Analiza datelor">Analiza datelor</option>
                      <option value="Multimedia">Multimedia</option>
                      <option value="Econometrie">Econometrie</option>
                      <option value="PSI">PSI</option>
                    </select>
                  </div>
                )}
                <div className="control">
                  <label htmlFor="text">Nume</label>
                  <input
                    type="text"
                    id="nume"
                    required
                    value={nume}
                    onChange={(e) => setNume(e.target.value)}
                  />
                </div>
                <div className="control">
                  <label htmlFor="text">Prenume</label>
                  <input
                    type="text"
                    id="prenume"
                    required
                    value={prenume}
                    onChange={(e) => setPrenume(e.target.value)}
                  />
                </div>
                <div className="control">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="control">
                  <label htmlFor="password"> Password</label>
                  <input
                    type="password"
                    id="password"
                    required
                    value={parola}
                    onChange={(e) => setParola(e.target.value)}
                  />
                </div>
                <div className="actions">
                  <button onClick={handleSubmit} className="text-white">
                    Create Account
                  </button>
                  <button
                    type="button"
                    className="toggle"
                    onClick={switchAuthModeHandler}
                  >
                    Login with existing account
                  </button>
                </div>
              </form>
            )}
          </section>
          <section>{<h3 className="text-center">{message}</h3>}</section>
        </Col>
      </Row>
    </div>
  );
};

export default AuthForm;
