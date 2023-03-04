import React from "react"
import styles from "./Card.module.scss"

console.log(styles);



 export function Card (props)  {

    const [toggle,setToggle] = React.useState(true)

    const onClickButton = () => {
      setToggle(false)
    }

    return(
            <div className={styles.card}>
            <div className={styles.favorite}>
              <img src="/img/empty.svg" alt="empty" />
            </div>
            <img width={133} height={112} src={props.imgUrl} alt="s" />
            <p>{props.title}</p>

            <div className="d-flex justify-between  align-center">
              <div className="d-flex flex-column">
                <span>ЦЕНА:</span>
                <b>{props.price}.</b>
              </div>

              {toggle ? <button onClick={onClickButton} >
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
                : <button onClick={onClickButton} >
                <img width={32} height={32} src="/img/complete.svg" alt="plus" />
                </button>  }

            </div>
          </div>
        
        
    )
}