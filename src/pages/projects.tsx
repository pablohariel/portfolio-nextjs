import { GetStaticProps } from 'next'
import githubApi from '../config/api.js'
import Header from '../components/header'
import styles from '../styles/pages/Projects.module.css'

interface Props {
  projects: any
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <div className={styles.main}>
      <Header pageRole='secondary'/>
      <div className={styles.body}>
        <h1>Projects</h1>
        <div className={styles.projects}>
          {projects.map(item => {
            return (
              <div key={item.id} className={styles.project}>
                <h1 className={styles.projectName}>{item.name}</h1>
                <a className={styles.projectLink} target="_blank" rel="noopener noreferrer" href={item.html_url}>Acessar</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await githubApi.get('pablohariel/repos')
  console.log(typeof (response.data))
  return {
    props: {
      projects: response.data
    }
  }
}

export default Projects
