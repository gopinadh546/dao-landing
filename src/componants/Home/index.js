import "./index.scss";
import { useEffect } from "react";

import { Link } from "react-router-dom";

import img3 from "./Images/recruiter2.jpg";
import FeatureCard from "../FeatureCard";
import {
  faBitcoinSign,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";


const features = [
  {
    id: 1,
    featureIcon: faBitcoinSign,
    featureHeading: "Bitcoin",
    featureDescription: "Lets explore data...",
  },
  {
    id: 2,
    featureIcon: faUserShield,
    featureHeading: "Bitcoin",
    featureDescription: "Let us help you...",
  },
  {
    id: 3,
    featureIcon: faUserShield,
    featureHeading: "Bitcoin",
    featureDescription: "Let us help you...",
  },
  {
    id: 4,
    featureIcon: faUserShield,
    featureHeading: "Bitcoin",
    featureDescription: "Let us help you...",
  },
  {
    id: 5,
    featureIcon: faUserShield,
    featureHeading: "Bitcoin",
    featureDescription: "Let us help you...",
  },
  {
    id: 6,
    featureIcon: faUserShield,
    featureHeading: "Bitcoin",
    featureDescription: "Let us help you...",
  },
  {
    id: 7,
    featureIcon: faUserShield,
    featureHeading: "Bitcoin",
    featureDescription: "Let us help you...",
  },
  {
    id: 8,
    featureIcon: faUserShield,
    featureHeading: "Bitcoin",
    featureDescription: "Let us help you...",
  },
];


const renderCards = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-best-company-card">
          <div className="home-best-company-card-text">
            <h1 className="home-best-company-card-heading">
              Let us Help you Find the best companies that suites you..
            </h1>
            <Link to="/">
              <button type="button" className="home-page-card-button">
                Invest
              </button>
            </Link>
          </div>
        </div>

        <div
          className="home-profile-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >

          <img src={img3} className="home-image-3" alt="" />
          
          <div className="home-profile-card-text">
            <h1 className="home-profile-card-heading">
              Complete your profile and kyc in single step..
            </h1>
            <Link to="/">
              <button type="button" className="home-page-card-button">
                profile
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};


const renderFeatures = () => {
  return (
    <div className="home-features-container">
      <h1 className="home-categories-heading">Top hikes</h1>
      <ul
        className="home-features-list-container"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        {features.map((eachFeature) => (
          <FeatureCard featureDetails={eachFeature} key={eachFeature.id} />
        ))}
      </ul>
    </div>
  );
};

// Rendering the whole home page
const Home = () => {
  useEffect(() => {
    AOS.init(); // used for transitions in the home page.
  });
  return (
    <>
      {renderCards()}
      {renderFeatures()}
    </>
  );
};

export default Home;