import LanguageSelector from './languageSelector'
import Logo from '../assets/logo.svg'
import styles from '../styles/components/Header.module.css'
import { IconContext } from 'react-icons'
import { IoLogoLinkedin, IoLogoGithub, IoArrowBack } from 'react-icons/io5'
import colors from '../config/colors.js'
import Link from 'next/link'

interface Props {
    pageRole: 'main' | 'secondary'
}

const Header: React.FC<Props> = ({ pageRole }) => {
  return (
    <div className={styles.main}>
        <div className={styles.header_left}>
            <div className={styles.logo}>
                {pageRole === 'main'
                  ? <Logo style={{ width: '100%', fill: colors.color_primary, stroke: colors.color_secondary }} />
                  : <Link href='/'><IoArrowBack size='100%' /></Link>
                }
            </div>
        </div>
        <div className={styles.header_right}>
            <LanguageSelector pageTitle={'Pablo Hariel'} pageDescription={'Home'} />
            <IconContext.Provider value={{ color: colors.color_secondary, size: '100%' }}>
                <div className={styles.github_img}>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/pablohariel'><IoLogoGithub /></a>
                </div>
                <div className={styles.linkedin_img}>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/pablo-hariel-hermes-dalla-rosa-238378160/'><IoLogoLinkedin /></a>
                </div>
            </IconContext.Provider>
        </div>
    </div>
  )
}

export default Header
