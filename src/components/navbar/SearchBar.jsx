import React from "react";
import styles from '../../styles/navbar/SearchBar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <form className={styles.searchBarContainer}>
      <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    <input
      type="text"
      name="search"
      id="search"
      className={styles.search}
      placeholder="Search"
      autoComplete="off"
      required
    />
    </form>
  );
};

export default SearchBar;
