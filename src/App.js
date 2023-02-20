

function App() {
  return (
    <div className="wrapper clear">
      <header>
        <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png"  />
        <div className="headerInfo">
          <h3 >REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
        </div>

        <ul className="headerRight">
          <li className="d-flex">
          <img  className="mr-10" width={18} height={18} src="/img/basket.png"  />
            <p>1205 руб.</p>
          </li>
          <li>
              <img className="headerHeart" width={20} height={20} src="/img/heart.png"  />
              <img width={20} height={20} src="/img/user.png"  />
          </li>
        </ul>
      </header>

      <div className="content">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
        <div className="card">
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

        <div className="card">
          <img width={133} height={112} src="/img/sneackers/2.jpg" alt="s" />
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>

          <div className="d-flex justify-between  align-center">
            <div className="d-flex flex-column">
              <span>ЦЕНА:</span>
              <b>12 999 руб.</b>
            </div>

            <button ><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>

          
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneackers/3.jpg" alt="s" />
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>

          <div className="d-flex justify-between  align-center">
            <div className="d-flex flex-column">
              <span>ЦЕНА:</span>
              <b>12 999 руб.</b>
            </div>

            <button ><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>

          
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneackers/4.jpg" alt="s" />
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
      </div>
    </div>
  );
}

export default App;
