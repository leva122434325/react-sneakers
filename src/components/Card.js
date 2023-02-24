import React from "react"

 export function Card ()  {
    return(
        <div className="d-flex">
            <div className="card">
            <div className="favorite">
              <img src="/img/empty.svg" alt="empty" />
            </div>
            <img width={133} height={112} src="/img/sneackers/1.jpg" alt="s" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>

            <div className="d-flex justify-between  align-center">
              <div className="d-flex flex-column">
                <span>ЦЕНА:</span>
                <b>12 999 руб.</b>
              </div>

              <button ><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
            </div>
          </div>
        </div>
        
    )
}