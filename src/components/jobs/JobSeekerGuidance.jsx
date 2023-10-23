import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/jobs/JobSeekerGuidance.module.css';
import React from "react";
import Footer from '../home/Footer';

const JobSeekerGuidance = () => {
  return (
    <div className={styles.jobSeekerGuidanceSection}>
    <div className={styles.jobSeekerGuidanceCard}>
      <header>
        <h4>Job seeker guidance</h4>
        <p>Recommended based on your activity</p>
      </header>
      <section className={styles.imageContainer}>
        <p>I want to improve my resume</p>
        <div>
          <img
            src="https://www.linkedin.com/dms/prv/image/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/0/1568251157263?m=AQIDEz-Cfrtg9gAAAYtI59f85aWuMvfZ_8LIlFGVGUVLusfPNPgisbpuqw&e=1697821635&v=beta&t=MnvHUK33RSg1stlTqwcDyQPuBzRZlCf5zDwfLsHEAls"
            alt="resume-icon-image"
          />
        </div>
      </section>
      <section className={styles.showMoreContainer}>
        <p>
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </p>
        <a href="#">
          Show more
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default JobSeekerGuidance;
