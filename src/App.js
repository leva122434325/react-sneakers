import axios from "axios";
import { useEffect, useState } from "react";
import { Content } from "./components/Content/Content";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";




function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

   const handleBasket =  () => {
    setCartOpened(!cartOpened)
  }


  useEffect(() => {
    axios.get('https://6404bf3c80d9c5c7bacf9a50.mockapi.io/items').then(res => {
      setItems(res.data);
    })
    axios.get('https://6404bf3c80d9c5c7bacf9a50.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    })

  },[])

  const onAddToCart = (obj) => {
    axios.post('https://6404bf3c80d9c5c7bacf9a50.mockapi.io/cart', obj)
    setCartItems( prev => [...prev, obj])
  }

  const onRemoveCart = (id) => {
    axios.delete(`https://6404bf3c80d9c5c7bacf9a50.mockapi.io/cart/${id}`)
    setCartItems( (prev) => prev.filter((item) => item.id !== id))
  }
  
  const onAddToFavorite = (obj) => {
    axios.post('https://6404bf3c80d9c5c7bacf9a50.mockapi.io/cart', obj)
    setCartItems( prev => [...prev, obj])
  }

  
  
  return (
    <div className="wrapper clear">
      {cartOpened && 
      <Drawer 
       items={cartItems}
       handleBasket={handleBasket}
       onRemoveCart={onRemoveCart}/>}
      <Header onAddToFavorite={onAddToFavorite} handleBasket={handleBasket} />
      <Content onAddToCart={onAddToCart} items={items} />
    </div>
  );
}

export default App;
