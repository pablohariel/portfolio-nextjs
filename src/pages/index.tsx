import { GetStaticProps } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/pages/Home.module.css'
import Link from 'next/link'
import data from '../store/pages/home'

interface Props {
  description: string,
  btns: string[],
}

const Blog: React.FC<Props> = ({ description, btns }) => {
  return (
    <div className={styles.main}>
      <Header pageRole='main' />
      <div className={styles.body}>
        <div className={styles.info}>
          <h1 className={styles.name}>Pablo Hariel</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <Link href='/projects'>
              <p className={styles.btn_text}>{btns[0]}</p>
            </Link>
          </div>
          <div className={styles.btn}>
            <Link href='/experience'>
              <p className={styles.btn_text}>{btns[1]}</p>
            </Link>
          </div>
          <div className={styles.btn}>
            <Link href='/about'>
              <p className={styles.btn_text}>{btns[2]}</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let btns: string[]
  let description = ''

  console.log(btns)

  if (locale === 'en') {
    description = data.en.description
    btns = data.en.btns
  }

  if (locale === 'pt') {
    description = data.pt.description
    btns = data.pt.btns
  }

  return {
    props: {
      description,
      btns
    }
  }
}

export default Blog
