import { Card } from "./Card";

export function Content() {
    return(
        <div className="content">
        <div className="d-flex align-start justify-between">
          <h1 className="mb-40">Все кроссовки</h1>
          <div className="searchBlock ">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>

       <Card/>
      
      </div>
    )
}