import Header from '../components/header'
import Skill from '../components/skill'
import styles from '../styles/pages/Experience.module.css'

const Experience: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header pageRole='secondary' />
      <div className={styles.body}>
        <h1 className={styles.title}>Experience</h1>
        <div className={styles.skills}>
          <Skill subject='React.js' rate={4.5} />
          <Skill subject='Node.js' rate={4.5} />
          <Skill subject='React Native' rate={3.5} />
          <Skill subject='Next.js' rate={4} />
        </div>
      </div>
    </div>
  )
}

export default Experience
