import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from '../../styles/pages/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Header page="contact" />
      <main>
        <div className={styles.contactWrapper}>
          <div className={styles.socialsContact}>
            <h5>Socials</h5>
            <p>If you want to see my social medias or open source projects, please click on one.</p>
            <div>
              <a><i className="fab fa-github"></i></a>
              <a><i className="fab fa-linkedin-in"></i></a>
              <a><i className="fab fa-instagram"></i></a>
              <a><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className={styles.cvContact}>
            <h5>My CV:</h5>
            <p>
              If you want to have a better view of knowledge, please click on the bottom above.
            </p>
            <button>
              Download CV
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}