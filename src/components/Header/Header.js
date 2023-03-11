import styles from "./Header.module.scss"

export function Header (props) {
    return(
        <header>
      <div className={styles.headerLeft}>
          <img width={40} height={40} src="/img/logo.png" />
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
            <img className={styles.headerHeart} 
              width={20} height={20} src="/img/heart.png" />
            <img className="cu-p" width={20} height={20} src="/img/user.png" />
          </li>
        </ul>
      </header>
    )
}