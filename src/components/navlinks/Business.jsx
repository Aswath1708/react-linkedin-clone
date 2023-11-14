import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Business.module.css";
import {

  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  getArrayOfOptions,
  getArrayOfProducts,
} from "../../utils/getBusinessLinks";

export const Business = ({setShowModal}) => {

  const arrayOfProducts = getArrayOfProducts();
  const arrayOfOptions = getArrayOfOptions();

  return (
    <div className={styles.businessModal}>
      <div className={styles.businessCardContainer}>
        <header>
          <h2>For Business</h2>
          <FontAwesomeIcon icon={faXmark} onClick={()=>setShowModal(false)}/>
        </header>
        <main>
          <section>
            <h3>Visit More LinkedIn Products</h3>
            <div className={styles.productsContainer}>
              {arrayOfProducts.map(({ icon, meaning }, i) => {
                return (
                  <div key={i}>
                    <FontAwesomeIcon icon={icon} />
                    <p>{meaning}</p>
                  </div>
                );
              })}
            </div>
          </section>
          <section>
            <h3>Explore more for business</h3>
            <div className={styles.optionsContainer}>
              {arrayOfOptions.map(({ heading, benefit }, i) => {
                return (
                  <p key={i}>
                    {heading}
                    <span>{benefit}</span>
                  </p>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
