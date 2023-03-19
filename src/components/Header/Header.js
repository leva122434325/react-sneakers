import styles from "./Header.module.scss"
import { Link } from 'react-router-dom'

export function Header (props) {
    return(
        <header>
      <div className={styles.headerLeft}>
          <Link to="/"><img width={40} height={40} src="/img/logo.png" /></Link>
          <div className="headerInfo">
            <h3 >REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className={styles.headerRight}>
          <li className="d-flex">
            <img onClick={props.handleBasket} className="mr-10 cu-p" width={18} height={18} src="/img/basket.png" />
            <p>1205 руб.</p>
          </li>
          <li>
            <Link to='/favorites'>
            <img className={styles.headerHeart} 
              width={20} height={20} src="/img/heart.png" /></Link>
            <img className="cu-p" width={20} height={20} src="/img/user.png" />
          </li>
        </ul>
      </header>
    )
}