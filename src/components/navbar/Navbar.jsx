import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../navlinks/Home";

import styles from "../../styles/navbar/NavBar.module.css";
import NavLinks from "./NavLinks";
import Logo from "../logo/Logo";
import SearchBar from "./SearchBar";

export const Navbar = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logoSearchBar}>
          <Logo />
          <SearchBar />
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
