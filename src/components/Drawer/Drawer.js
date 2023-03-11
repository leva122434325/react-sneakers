import styles from "./Drawer.module.scss"

export function Drawer({ handleBasket, items = [], onRemoveCart }) {

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between ">Корзина
          <img onClick={handleBasket} className={styles.crossBtn} src="/img/cross.svg" alt="cross" /></h2>

        {items.length > 0
          ? <>
          <div className={styles.item}>
          {items.map((obj) => (
            <div key={obj.id} className={styles.basketCart}>
            <div className="d-flex align-center">
              <img width={70} height={70} src={obj.imgUrl} alt="sneak"/>
              <div className={styles.basketText}>
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img onClick={() => onRemoveCart(obj.id)}  className={styles.crossBtn} src="/img/cross.svg" alt="cross" />
            </div>
          </div>
          ))}
        </div> 
        
        <ul className={styles.cartTotalBlock}>
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

        <button className={styles.cartBtn}>Оформить заказ <img src="/img/rightSide.svg" alt="rightSide" /></button>
          </>

          : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img src="/img/empty-cart.jpg" alt="empty-cart" className="mb-20" />
            <h2>Пустая корзина</h2>
            <p className={styles.cartEmptyTitle}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button onClick={handleBasket} className={styles.emptyCartBtn}>
              <img src="/img/arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        }

        
      </div>
    </div>
  )
}