import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Business.module.css";
import {
  faBullseye,
  faCompass,
  faEnvelopesBulk,
  faGraduationCap,
  faMoneyBillTrendUp,
  faPeopleGroup,
  faRankingStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const Business = ({setShowModal}) => {

  const arrayOfProducts = [
    {
      icon: faGraduationCap,
      meaning: "Learning",
    },
    {
      icon: faRankingStar,
      meaning: "Talent Insights",
    },
    {
      icon: faEnvelopesBulk,
      meaning: "Post a job",
    },
    {
      icon: faBullseye,
      meaning: "Advertise",
    },
    {
      icon: faCompass,
      meaning: "Find New Clients",
    },
    {
      icon: faPeopleGroup,
      meaning: "Groups",
    },
    {
      icon: faMoneyBillTrendUp,
      meaning: "Services Marketplace",
    },
  ];

  const arrayOfOptions = [
    {
      heading: "Hire on LinkedIn",
      benefit: "Find, attract and recruit talent",
    },
    {
      heading: "Sell with LinkedIn",
      benefit: "Build relationships with buyers",
    },
    {
      heading: "Post a job for free",
      benefit: "Find quality candidates",
    },
    {
      heading: "Advertise on LinkedIn",
      benefit: "Acquire customers and grow your business",
    },
    {
      heading: "Learn with LinkedIn",
      benefit: "Courses to develop your employees",
    },
    {
      heading: "Admin Center",
      benefit: "Manage billing and account details",
    },
  ];

  return (
    <div className={styles.businessModal}>
      <div className={styles.businessCardContainer}>
        <header>
          <h2>For Business</h2>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={()=>setShowModal()}
          />
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
