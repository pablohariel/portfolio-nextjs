import { GetStaticProps } from "next";
import LanguageSelector from '../components/languageSelector';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/pages/Home.module.css';
import { IoOpenOutline } from "react-icons/io5";
import Logo from '../assets/logo.svg'
import colors from '../config/colors'

interface Props {
  pageTitle: string,
  pageDescription: string,
  posts: [{
    title: string,
    content: string
  }],
}

const Blog: React.FC<Props> = ({ posts, pageTitle, pageDescription }) => {
  return (
    <div className={styles.main}> 
      <Header />
      <div className={styles.body}> 
        <div className={styles.info}>
          <h1 className={styles.name}>Pablo Hariel</h1>
          <p className={styles.description}>Programador Web full stack, com foco em tecnologias modernas como React.js e Node.js</p>
        </div>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <p className={styles.btn_text}>Projetos</p> 
            {/* <div className={styles.btn_icon}>
              <IoOpenOutline size='100%' color={colors.color_secondary} />
            </div> */}
          </div>
          <div className={styles.btn}>
            <p className={styles.btn_text}>Experiencia</p>
            {/* <div className={styles.btn_icon}>
              <IoOpenOutline size='100%' color={colors.color_secondary} />
            </div> */}
          </div>
          <div className={styles.btn}>
            <p className={styles.btn_text}>Sobre</p>
            {/* <div className={styles.btn_icon}>
              <IoOpenOutline size='100%' color={colors.color_secondary} />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let posts = [];
  let pageTitle = '';
  let pageDescription = '';

  if(locale === 'en') {
    pageTitle = 'Next.JS | EN';
    pageDescription = 'next.js with internationalized routing';
    posts = [
      {
        title: "Post One",
        content: "This is the first post"
      },
      {
        title: "Post Two",
        content: "This is the second post"
      },
      {
        title: "Post Three",
        content: "This is the third post"
      }
    ]
  }

  if(locale === 'pt') {
    pageTitle = 'Next.JS | PT';
    pageDescription = 'next.js com sistema de rotas internacionais';
    posts = [
      {
        title: "Primeiro Post",
        content: "Esse é o primeiro post"
      },
      {
        title: "Segundo Post",
        content: "Esse é o segundo post"
      },
      {
        title: "Terceiro Post",
        content: "Esse é o terceiro post"
      }
    ]
  }

  return { 
    props: {
      pageTitle,
      pageDescription,
      posts
    }
  }
}
  
export default Blog;