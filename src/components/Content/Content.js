import { useState } from "react";
import { Card } from "../Card/Card";
import styles from "./Content.module.scss"


export function Content({isLoading, ...props}) {
  const [searchValue, setsearchValue] = useState('')
  console.log(isLoading);


  const onChangeSearchInput = (event) => {
    setsearchValue(event.target.value)
  }

  const renderItems = () => {
    const filtredItems = props.items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    
    return (isLoading 
    ? Array(8).fill(<Card  loading={isLoading}/>)
    : filtredItems.map(item => (
      <Card
        key={item.title}
        {...item}
        onFavorite={(obj) => props.onAddToFavorite(obj)}
        onPlus={(obj) => props.onAddToCart(obj)}
        added={props.cartItems.some(obj => Number(obj.id) === Number(item.id))}
        loading={isLoading} /> )) 
    )
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
        {renderItems()}
      </div>
    </div>
  )
}