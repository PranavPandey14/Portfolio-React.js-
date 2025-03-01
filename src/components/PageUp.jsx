import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import Styles from '../styles/PageUp.module.css';

const PageUp = () => {
  const [arrowVisible, setArrowVisible] = useState(false);

  // Handle scroll event to show/hide the arrow
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setArrowVisible(true); // Show the arrow when scrolling down 300px
    } else {
      setArrowVisible(false); // Hide the arrow when scrolling up
    }
  };

  // Scroll to the top of the page with smooth behavior
  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Use effect to handle scroll event
  useEffect(() => {
    // Listen for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {arrowVisible && (
        <div className={Styles.arrowDiv}>
          <FaArrowCircleUp onClick={handleArrowClick} size={50} />
        </div>
      )}
    </>
  );
};

export default PageUp;
