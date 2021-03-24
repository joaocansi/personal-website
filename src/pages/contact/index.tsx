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
            <p>If you want to see my social medias or open source projects, please click on one of the links.</p>
            <div>
              <a href="https://github.com/joaocansi" target="_blank"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-guilherme-silva-cansi-4469151b7" target="_blank"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/joaocansi" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://api.whatsapp.com/send?phone=5521991941922" target="_blank"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className={styles.cvContact}>
            <h5>My CV:</h5>
            <p>
              If you want to have a better view of knowledge, please click on the bottom above.
            </p>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-guilherme-silva-cansi-4469151b7" target="_blank">
              Download CV
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}