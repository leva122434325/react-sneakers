import { useState } from "react";
import { Card } from "../Card/Card";
import styles from "./Content.module.scss"




export function Content(props) {
  const [searchValue, setsearchValue] = useState('')


  

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setsearchValue(event.target.value)
  }

  return (
    <div className={styles.content}>
      <div className="d-flex align-start justify-between">
        <h1 className="mb-40">{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки' }</h1>
        <div className={styles.searchBlock}>
          <img src="/img/search.svg" alt="Search" />
          <input value={searchValue} onChange={onChangeSearchInput} placeholder="Поиск..." type="text" />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {props.items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => (
          <Card
            key={item.title}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            onFavorite={() => console.log("нажали")}
            onPlus={(obj) => props.onAddToCart(obj)} />

        ))}
      </div>




    </div>
  )
}