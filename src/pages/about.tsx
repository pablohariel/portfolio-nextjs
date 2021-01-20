import { GetStaticProps } from 'next'
import data from '../store/pages/about.js'
import styles from '../styles/pages/About.module.css'
import Header from '../components/header'

interface Props {
  title: string,
  description: string
}

const About: React.FC<Props> = (props) => {
  return (
      <div className={styles.main}>
        <Header pageRole='secondary' />
        <div className={styles.body}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.description}>{props.description}</p>
        </div>
      </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let description: string
  let title: string

  if (locale === 'en') {
    title = data.en.title
    description = data.en.description
  }

  if (locale === 'pt') {
    title = data.pt.title
    description = data.pt.description
  }

  console.log(locale)
  return {
    props: {
      title,
      description
    }
  }
}

export default About
