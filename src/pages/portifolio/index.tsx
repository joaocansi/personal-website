import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Project, { ProjectProps } from '../../components/Project';
import styles from '../../styles/pages/Portifolio.module.css';

const projects: ProjectProps[] = [
  { 
    project_name: 'Simple Todolist',
    description: 'This project was created to improve my knowlegde about some react hooks like useState and contexts',
    image: 'https://camo.githubusercontent.com/b9bc7c3d475104bf3b9f17d8d6ec0550751cfb875876a9b3d3e08af4da49ee92/68747470733a2f2f692e6962622e636f2f595130645a78532f53637265656e73686f742d362e706e67',
    link: 'https://github.com/joaocansi/simple-todolist' 
  },
  {
    project_name: 'Simple raffle',
    description: 'This project was created to improve my knowledge about api rest integration in react',
    image: 'https://i.ibb.co/jwzXshW/Screenshot-1.png',
    link: 'https://github.com/joaocansi/simple-raffle'
  } 
]

export default function Portifolio() {
  return (
    <div className={styles.portifolioContainer}>
      <Header page="portifolio" />
      <main>
        <h2>Projects</h2>
        <div className={styles.projectsContainer}>
          <Project project={projects[0]}  />
          <Project project={projects[1]}  />
        </div>
      </main>
      <Footer />
    </div>
  )
}