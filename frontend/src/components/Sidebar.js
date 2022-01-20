//import useState hook to create menu collapse state
import React, { useState } from "react";
import { logout } from "../actions/userActions";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";
//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { useNavigate } from "react-router";
//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

const Header = (props) => {
  const navigate = useNavigate();
  //create initial menuCollapse state using useState hook
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  const [statsActivity, setStatsActivity] = useState(false);
  const [statsAdd, setStatsAdd] = useState(true);
  const [home, setHome] = useState(true);
  const cont = props.cont;
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const handlerActivity = () => {
    setStatsActivity(true);
    setStatsAdd(false);
    setHome(false);
    props.handler(1);
  };

  const handlerAdd = () => {
    setStatsActivity(false);
    setStatsAdd(true);
    setHome(false);
    props.handler(2);
  };
  const handlerSettings = () => {
    setStatsActivity(false);
    setStatsAdd(false);
    setHome(true);
    props.handler(3);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext ml-3">
              {console.log(cont.hasOwnProperty("materie"))}
              {cont.hasOwnProperty("materie") === true ? (
                <p>{menuCollapse ? "Prof" : "Professor"}</p>
              ) : (
                <p>{menuCollapse ? "Stud" : "Student"}</p>
              )}
              <p>
                {cont.nume} {cont.prenume}
              </p>
              {cont.hasOwnProperty("grupa") && (
                <p>
                  <h5>Grupa {cont.grupa}</h5>{" "}
                </p>
              )}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                active={statsActivity}
                icon={<FiHome />}
                onClick={handlerActivity}
              >
                Activities
              </MenuItem>
              {props.cont.hasOwnProperty("materie") && (
                <MenuItem
                  active={statsAdd}
                  icon={<FaList />}
                  onClick={handlerAdd}
                >
                  Add Activity
                </MenuItem>
              )}

              {/* <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem> */}

              {cont.hasOwnProperty("grupa") && (
                <MenuItem
                  active={home}
                  icon={<BiCog />}
                  onClick={handlerSettings}
                >
                  Home
                </MenuItem>
              )}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={logoutHandler}>
                Logout
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
