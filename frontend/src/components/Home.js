import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Sidebar";
import AddActivityForm from "./AddActivityForm";
import Activities from "./Activities";
import { listActivities } from "../actions/activityActions";
import { listAccess } from "../actions/accessActions";
import UserHome from "./UserHome";
const Home = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const listaCoduri = useSelector((state) => state.listAccess);

  const [page, setPage] = useState(2);
  const { error, loading, userInfo } = userLogin;
  const { error3, loading3, info } = listaCoduri;

  const activities = useSelector((state) => state.listActivity);

  const { error2, loading2, allActivities } = activities;
  useEffect(() => {
    console.log(userInfo);
    if (userInfo === null) {
    } else {
      dispatch(listActivities());
      dispatch(listAccess());
    }
  }, [userInfo]);
  const handler = (value) => {
    setPage(value);
  };
  return (
    <div>
      <Header cont={userInfo} handler={handler} />
      <div className="text-center  ">
        {userInfo.hasOwnProperty("materie") ? (
          page === 1 ? (
            <Activities
              userInfo={userInfo}
              activitiess={allActivities}
              info={info}
            />
          ) : page === 2 ? (
            <h2>
              {" "}
              <AddActivityForm userInfo={userInfo} />
            </h2>
          ) : (
            <h1>3</h1>
          )
        ) : page === 1 ? (
          <Activities
            userInfo={userInfo}
            activitiess={allActivities}
            info={info}
          />
        ) : (
          <UserHome nume={userInfo.prenume} />
        )}
      </div>
    </div>
  );
};
export default Home;
