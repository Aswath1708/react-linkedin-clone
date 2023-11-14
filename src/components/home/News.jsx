import {
  faChevronDown,
  faChevronUp,
  faCircleDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { getNewsList } from "../../utils/getNewsList";
import styles from '../../styles/home/NewsCard.module.css';

const News = () => {
  const newsList = getNewsList();
  const splicedList = newsList.slice(0, 5);

  const [showLess, setShowLess] = useState(false);
  const [newsArray, setNewsArray] = useState(splicedList);
  const modalRef = useRef();

  const handleShowMore = () => {
    setShowLess(true);
    setNewsArray(newsList);
  };

  const handleShowLess = () => {
    setShowLess(false);
    setNewsArray(splicedList);
  };

  return (
    <div className={styles.newsCard}>
      <div className={styles.newsCardHeader}>
        <p>LinkedIn News</p>
        <i onClick={()=>{modalRef.current.style.display="flex"}}>i</i>
      </div>
      <section className={styles.newsCardList}>
        {newsArray.map((data, i) => {
          return (
            <div key={i}>
              <section>
                <FontAwesomeIcon icon={faCircleDot} />
                <p>{data.headLine}</p>
              </section>
              <p>{data.telecastedAt} ago</p>
            </div>
          );
        })}
      </section>
      {showLess ? (
        <button onClick={handleShowLess}>
          Show less <FontAwesomeIcon icon={faChevronUp} />
        </button>
      ) : (
        <button onClick={handleShowMore}>
          Show more <FontAwesomeIcon icon={faChevronDown} />
        </button>
      )}
      <section className={styles.iCardTextHolder} ref={modalRef}>
        <p>These are the day`s top professional news stories and conversations. <span>Learn more</span> about how they`re selected.</p>
        <FontAwesomeIcon icon={faXmark} onClick={()=>modalRef.current.style.display="none"}/>
      </section>
    </div>
  );
};

export default News;
