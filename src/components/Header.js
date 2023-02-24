export function Header () {
    return(
        <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3 >REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li className="d-flex">
            <img className="mr-10" width={18} height={18} src="/img/basket.png" />
            <p>1205 руб.</p>
          </li>
          <li>
            <img className="headerHeart" width={20} height={20} src="/img/heart.png" />
            <img width={20} height={20} src="/img/user.png" />
          </li>
        </ul>
      </header>
    )
}