import {
  NavLink,
  Link,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Home } from "./navlinks/Home";
import { Me } from "./navlinks/Me";
import { MyNetwork } from "./navlinks/MyNetwork";
import { Business } from "./navlinks/Business";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navBar">
        <div className="logo-searchBar">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#fff", height: "2.5rem" }}
            onClick={() => {
              navigate("/home");
            }}
          />
          <input
            type="text"
            name="search"
            id="search"
            className="search"
            placeholder="Search"
            autoComplete="off"
          />
        </div>
        <div className="nav-Links">
          <ul>
            <li>
              <NavLink to="/home/feed">
                <FontAwesomeIcon
                  icon={faHouseChimney}
                  style={{ height: "20px", width: "20px" }}
                />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/my-network">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  style={{ height: "20px", width: "20px" }}
                />
                My Network
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/jobs">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ height: "20px", width: "20px" }}
                />
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/messages">
                <FontAwesomeIcon
                  icon={faMessage}
                  style={{ height: "20px", width: "20px" }}
                />
                Messaging
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/notifications">
                <FontAwesomeIcon
                  icon={faBell}
                  style={{ height: "20px", width: "20px" }}
                />
                Notifications
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="/home/me"> */}
              <NavLink to={"/login"}>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ height: "20px", width: "20px" }}
                />
                <p>
                  Me <FontAwesomeIcon icon={faCaretDown} />
                </p>
              </NavLink>
            </li>
          </ul>
          <div className="business-premium-links">
            <div className="business-link" onClick={()=>setShowModal(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
              </svg>
              <div>
                For Business <FontAwesomeIcon icon={faCaretDown} />
              </div>
              {showModal && <Business setShowModal={()=>setShowModal(false)} />}
            </div>

            <Link to="/premium">Try premium for free</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Outlet />
    </>
  );
};
