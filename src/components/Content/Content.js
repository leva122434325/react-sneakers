import { Card } from "../Card/Card";
import styles from "./Content.module.scss"

const arr = [
{title:'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgUrl: "/img/sneackers/1.jpg"},
{title:'Мужские Кроссовки Nike Blazer Mid Suede', price: 1999, imgUrl: "/img/sneackers/2.jpg"},
{title:'Мужские Кроссовки Nike Blazer  Suede', price: 2999, imgUrl: "/img/sneackers/3.jpg"}
]

export function Content() {
    return(
        <div className={styles.content}>
        <div className="d-flex align-start justify-between">
          <h1 className="mb-40">Все кроссовки</h1>
          <div className={styles.searchBlock}>
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>

        <div className="d-flex">
        {arr.map(obj => (
            <Card  title={obj.title}
                   price={obj.price} 
                   imgUrl={obj.imgUrl}/>
          
            ))}
        </div>
        
        
        
       
      </div>
    )
}