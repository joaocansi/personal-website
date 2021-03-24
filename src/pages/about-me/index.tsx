import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from '../../styles/pages/AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <Header page="about-me" />
      <main>
        <section className={styles.whoSection}>
          <h2>Who am I?</h2>
          <div>
            <div className={styles.whoImage}></div>
            <div>
              <p>I'm web devoloper from Rio de Janeiro, Brazil.</p>
              <p>
                I enjoy programming and solving problems. 
                My first impression with programming, was 
                when I was 12 years old. After play games 
                like Minecraft, part of me was asking myself 
                about how that stuff worked behind the 
                beatiful game design. From them on, I've working
                with programming.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.skillSection}>
          <h2>Skills</h2>
          <div>
            <div className={`${styles.progressContainer} ${styles.node}`}>
              <img src="node.png" alt="NodeJS"/>
              <div>
                <h5>NodeJS</h5>
                <p>I am able to create api rest that can connect to your website.</p>
              </div>
            </div>
            <div className={`${styles.progressContainer} ${styles.react}`}>
              <img src="react.png" alt="ReactJS"/>
              <div>
                <h5>React</h5>
                <p>I can develop amazing dynamic interfaces using SPA.</p>
              </div>
            </div>
            <div className={`${styles.progressContainer} ${styles.html}`}>
              <img src="html5.png" alt="HTML5"/>
              <div>
                <h5>HTML5</h5>
                <p>All of my work are focused on SEO. I am able to develop websites semantically correct.</p>
              </div>
            </div>
            <div className={`${styles.progressContainer} ${styles.css}`}>
              <img src="css.png" alt="CSS"/>
              <div>
                <h5>CSS3</h5>
                <p>I can build beautiful interfaces using the new trends.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer /> 
    </div>
  );
}