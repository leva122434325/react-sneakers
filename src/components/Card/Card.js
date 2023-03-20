import React, { useState, useEffect } from "react"
import ContentLoader from "react-content-loader"
import styles from "./Card.module.scss"


export function Card({ id, imgUrl, title, price, onPlus, onFavorite, favorited = false, added = false, loading = false, props }) {

  const [toggle, setToggle] = useState(added)
  const [isfavorite, setFavorite] = useState(favorited)

  const onClickPlus = () => {
    onPlus({ id, imgUrl, title, price })
    setToggle(!toggle)
  }

  const onClickFavorite = () => {
    onFavorite({ id, imgUrl, title, price })
    setFavorite(!isfavorite)
  }


  return (
    <div className={styles.card}>

      {loading ? 
      <ContentLoader
        speed={2}
        width={150}
        height={187}
        viewBox="0 0 150 187"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <circle cx="636" cy="684" r="15" />
        <rect x="663" y="671" rx="2" ry="2" width="140" height="10" />
        <rect x="663" y="687" rx="2" ry="2" width="140" height="10" />
        <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
        <rect x="0" y="107" rx="10" ry="10" width="150" height="15" />
        <rect x="102" y="127" rx="0" ry="0" width="0" height="1" />
        <rect x="100" y="135" rx="0" ry="0" width="1" height="1" />
        <rect x="102" y="66" rx="0" ry="0" width="1" height="0" />
        <rect x="0" y="135" rx="10" ry="10" width="100" height="15" />
        <rect x="1" y="163" rx="10" ry="10" width="80" height="24" />
        <rect x="113" y="154" rx="10" ry="10" width="32" height="32" />
      </ContentLoader>
      : <>
      <div className={styles.favorite} >
        <img onClick={onClickFavorite}
          src={isfavorite ? "/img/full.svg" : "/img/empty.svg"}
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
          src={toggle ? "/img/complete.svg" : "/img/plus.svg"}
          alt="plus" />

      </div>
      </>}
      
    </div>
  )
}