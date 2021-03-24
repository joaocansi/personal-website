import styles from '../styles/components/Project.module.css';

export interface ProjectProps {
  image: string;
  description: string;
  project_name: string;
  link: string;
}

interface IProject {
  project: ProjectProps;
}

const Project: React.FC<IProject> = ({ project }) => {
  const { image, description, link, project_name } = project;
  return (
    <div className={styles.projectContainer}>
      <img src={image} alt={project_name} />
      <div>
        <h5>{project_name}</h5>
        <p>{description}</p>
        <a href={link} target="_blank">Ver mais</a>
      </div>
    </div>
  )  
}

export default Project;