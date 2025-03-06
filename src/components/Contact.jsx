import React, { useState } from "react";
import styles from '../styles/Contact.module.css'; // Importing the module CSS
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import axios from 'axios'; // Import Axios
import { Spinner } from "react-bootstrap";
import Swal from 'sweetalert2'; // Import Swal for notifications

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // For controlling submission state (loading or success)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set loading state

    try {
      // Create FormData object
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);

      // Replace the API URL with your actual API endpoint
      const response = await axios.post('https://portfoliobackend-trza.onrender.com/api/contact', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure that the request sends data in FormData format
        }
      });

      console.log('Success:', response.data); // Handle successful response
      setIsSubmitting(false); // Reset loading state

      // Success notification
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonText: 'Okay'
      });

      // Clear the form
      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error('Error:', error); // Handle error
      setIsSubmitting(false); // Reset loading state

      // Error notification
      Swal.fire({
        title: 'Oops!',
        text: 'Failed to send your message. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.ContactTitle}>Get in Touch</h2>
        <p>Feel free to get in touch with me if you have any questions or projects in mind!</p>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formField}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className={styles.formField}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className={styles.formField}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="d-flex justify-content-center">
                Sending
                <Spinner className="mt-1 mx-2" size="sm" />
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        <div className={styles.socialLinks}>
          <h5>Or connect with me on social media:</h5>
          <a href="https://www.linkedin.com/in/pranav-pandey-62969b21a/"><SiLinkedin size={30} className="mx-3" color="#0A66C2" /></a>
          <a href="https://github.com/PranavPandey14"><SiGithub size={30} className="mx-3" color="#000000" /></a>
          <a href="mailto:pranavpandey12245@gmail.com" ><SiGmail size={30} className="mx-3" color="#BB001B" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
