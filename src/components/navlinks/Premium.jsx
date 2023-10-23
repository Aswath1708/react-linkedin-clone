import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Premium.module.css";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PremiumPlansCard = ({ h1, p, h2, li1, li2, li3, border }) => {
  const notify = () => {
    toast("Under Construction!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type:"info",
    });
  };
  return (
    <div
      className={styles.premiumCard}
      style={{ borderTop: `8px solid ${border}` }}
    >
      <header>
        <h1 style={{ color: `${border}` }}>{h1}</h1>
        <p>{p}</p>
      </header>
      <section></section>
      <main>
        <ul>
          {h2 && <h2>{h2}</h2>}
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
        </ul>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <button onClick={notify}>Learn more</button>
      </main>
    </div>
  );
};

export const Premium = () => {
  const navigate = useNavigate();
  const arrayOfPlanDetails = [
    {
      h1: "Career",
      p: "Get hired and get ahead",
      li1: "Stand out and get in touch with hiring managers",
      li2: "See how you compare to other applicants",
      li3: "Learn new skills to advance your career",
      border: "#a7e18b",
    },
    {
      h1: "Business",
      p: "Grow and nurture your network",
      h2: "All career features, plus:",
      li1: "Find and contact the right people",
      li2: "Promote and grow your business",
      li3: "Learn new skills to enhance your professional brand",
      border: "#c2d3e4",
    },
    {
      h1: "Sales Navigator Core",
      p: "Unlock sales opportunities",
      h2: "All Business features, plus:",
      li1: "Find leads and accounts in your target market",
      li2: "Get real-time insights for warm outreach",
      li3: "Build trusted relationships with customers and prospects",
      border: "#e5c8e4",
    },
    {
      h1: "Recruiter Lite",
      p: "Find and hire talent",
      h2: "All Business features, plus:",
      li1: "Find great candidates, faster",
      li2: "Contact top talent directly",
      li3: "Build relationships with prospective hires",
      border: "#f4c7bb",
    },
  ];
  return (
    <div className={styles.premiumPage}>
      <nav>
        <FontAwesomeIcon icon={faLinkedin} onClick={() => navigate("/home")} />
        <Link to="/home">Back to LinkedIn.com</Link>
      </nav>
      <main>
        <h2>Achieve your goals faster with Premium</h2>
        <p>Your friends and millions of other members use Premium.</p>
        <p>
          Start your free 1-month trial today. Cancel anytime. We'll send you a
          reminder 7 days before your trial ends.
        </p>
      </main>
      <div className={styles.premiumCardContainer}>
        {arrayOfPlanDetails.map((data, i) => {
          return <PremiumPlansCard {...data} />;
        })}
      </div>
    </div>
  );
};
