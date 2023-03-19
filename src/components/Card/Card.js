import React, { useState, useEffect } from "react"
import styles from "./Card.module.scss"


 export function Card ({imgUrl,title,price, onPlus, onFavorite, favorited = false})  {

    const [toggle,setToggle] = useState(false)
    const [isfavorite,setFavorite] = useState(favorited)

    const onClickPlus = () => {
      onPlus({imgUrl,title,price})
      setToggle(!toggle)
    }

    const onClickFavorite = () => {
      onFavorite({imgUrl,title,price})
      setFavorite(!isfavorite)
    }


    return(
            <div className={styles.card}>
            <div className={styles.favorite} >
              <img onClick={onClickFavorite} 
              src={ isfavorite ? "/img/full.svg" :"/img/empty.svg" }
              alt="empty" />
            </div>
            <img width={133} height={112} src={imgUrl} alt="s" />
            <p>{title}</p>

            <div className="d-flex justify-between  align-center">
              <div className="d-flex flex-column">
                <span>ЦЕНА:</span>
                <b>{price}.</b>
              </div>
              <img className="cu-p"
               onClick={onClickPlus}
               src={toggle ? "/img/complete.svg" :  "/img/plus.svg"} 
               alt="plus" /> 
                  
            </div>
          </div>
        
        
    )
}