import { IoStarHalf, IoStar, IoStarOutline } from 'react-icons/io5'
import styles from '../styles/components/Skill.module.css'

interface Props {
    subject: string,
    rate: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
}

const Skill: React.FC<Props> = ({ subject, rate }) => {
  const stars = []

  const getStars = () => {
    let cont = 0
    while (cont <= rate) {
      if (!Number.isInteger(cont) && cont + 0.5 > rate) {
        stars.push(<IoStarHalf color='#FFF' />)
      } else if (Number.isInteger(cont) && cont + 0.5 > rate && cont !== 0) {
        stars.push(<IoStar color='#FFF' />)
      } else if (Number.isInteger(cont) && cont + 0.5 <= rate && cont !== 0) {
        stars.push(<IoStar color='#FFF' />)
      }
      cont += 0.5
    }
    cont -= 0.5
    console.log(cont)
    while (cont + 0.5 < 5) {
      stars.push(<IoStarOutline color='#FFF' />)
      cont++
    }
  }

  getStars()

  return (
    <div className={styles.main}>
        <div className={styles.item}>
            <p className={styles.title}>{subject}</p>
            <div className={styles.stars}>
                {stars}
            </div>
        </div>
    </div>
  )
}

export default Skill
