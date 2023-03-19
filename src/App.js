import axios from "axios";
import { useEffect, useState } from "react";
import { Content } from "./components/Content/Content";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import { Favorites } from "./components/Favorites/Favorites"
import { Routes, Route } from 'react-router-dom'




function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  const handleBasket = () => {
    setCartOpened(!cartOpened)
  }


  useEffect(() => {
    axios.get('https://6404bf3c80d9c5c7bacf9a50.mockapi.io/items').then(res => {
      setItems(res.data);
    })
    axios.get('https://6404bf3c80d9c5c7bacf9a50.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    })

  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://6404bf3c80d9c5c7bacf9a50.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveCart = (id) => {
    axios.delete(`https://6404bf3c80d9c5c7bacf9a50.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onAddToFavorite = (obj) => {
    if (favorites.find(favObj => favObj.id === obj.id)) {
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
    }
    else {
      setFavorites(prev => [...prev, obj])
    }
  }



  return (
    <div className="wrapper clear">
      {cartOpened &&
        <Drawer
          items={cartItems}
          handleBasket={handleBasket}
          onRemoveCart={onRemoveCart} />}
      <Header handleBasket={handleBasket} />

      <Routes>
        <Route path="/" exact element={
          <Content
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            items={items} />} >
        </Route>
        <Route path="/favorites" exact element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}></Route>
      </Routes>




    </div>
  );
}

export default App;
