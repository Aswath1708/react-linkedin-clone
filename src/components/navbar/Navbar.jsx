import { Routes, Route, Outlet, useNavigate, redirect } from "react-router-dom";
import { Home } from "../navlinks/Home";

import styles from "../../styles/navbar/NavBar.module.css";
import NavLinks from "./NavLinks";
import Logo from "../logo/Logo";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../App";

export const Navbar = () => {
  const { jwtToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwtToken) {
      navigate("/login");
    }
  }, [jwtToken]);
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logoSearchBar}>
          <Logo />
          <input
            type="text"
            name="search"
            id="search"
            className={styles.search}
            placeholder="Search"
            autoComplete="off"
          />
        </div>
        <NavLinks />
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Outlet />
    </>
  );
};
