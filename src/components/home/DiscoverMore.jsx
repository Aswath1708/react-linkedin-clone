import React from "react";
import styles from "../../styles/home/DiscoverMore.module.css";

const DiscoverMore = () => {
  return (
    <div className={styles.discoverMore}>
      <p>Groups</p>
      <section>
        <p>Events</p>
        <span>+</span>
      </section>
      <p>Followed Hashtags</p>
      <div>Discover more</div>
    </div>
  );
};

export default DiscoverMore;
