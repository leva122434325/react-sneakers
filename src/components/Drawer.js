export function Drawer() {
    return(
        <div style={{display:'none'}} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between ">Корзина <img className="crossBtn cu-p" src="/img/cross.svg" alt="cross" /></h2>

        <div className="item">
        <div className="basket-cart ">
          <div className="d-flex align-center">
            <img src="/img/basket-sneak.jpg" alt="sneak" />

            <div className="basket-text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>

            <img className="crossBtn" src="/img/cross.svg" alt="cross" />
          </div>
        </div>
        <div className="basket-cart ">
          <div className="d-flex align-center">
            <img src="/img/basket-sneak.jpg" alt="sneak" />

            <div className="basket-text">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>

            <img className="crossBtn" src="/img/cross.svg" alt="cross" />
          </div>
        </div>
        </div>

        <ul className="cartTotalBlock">
          <li className="d-flex align-end">
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб. </b>
          </li>
          <li className="d-flex">
            <span>Налог 5%: </span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>

        <button  className="cartBtn">Оформить заказ <img src="/img/rightSide.svg" alt="" /></button>
      </div>
    </div>
    )
}