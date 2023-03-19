import { Card } from "../Card/Card";
import styles from "../Content/Content.module.scss"


export function Favorites(props) {
  

  return (
    <div className={styles.content}>
      <div className="d-flex align-start justify-between">
        <h1 className="mb-40">Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
      {props.items.map(item => (
          <Card
            key={item.index}
            {...item}
            onFavorite={props.onAddToFavorite}
            onPlus={(obj) => props.onAddToCart(obj)}
            favorited={true} />
        ))}
      </div>
    </div>
  )
}