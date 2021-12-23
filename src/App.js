import { useEffect, useState } from "react";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
 
  useEffect(() => {
    axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/items').then(res => setItems(res.data))
    axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/cart').then(res => setCartItems(res.data))
    axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/favorits').then(res => setFavoriteItems(res.data))
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://61c227bf9dbcca0017c82393.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onAddFavorite = async (obj) => {
    try{
      if (favoriteItems.find(item => item.id === obj.id)){
        axios.delete(`https://61c227bf9dbcca0017c82393.mockapi.io/favorits/${obj.id}`);
        setFavoriteItems(prev => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://61c227bf9dbcca0017c82393.mockapi.io/favorits', obj);
        setFavoriteItems(prev => [...prev, data]);
      }
    } catch {
      alert('SORRY ERROR!')
    }
    
  };


  const onRemoveItem = (id) => {
    axios.delete(`https://61c227bf9dbcca0017c82393.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onChangeInputValue = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)}/>

      <Routes>
        <Route 
          path="/" 
          element = {
            <Home 
              favorite={false}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeInputValue={onChangeInputValue}
              items={items}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
            />
          }
        /> 
        <Route 
          path="/favorites" 
          element = {
            <Favorites
              favorite={false}
              items={favoriteItems}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
            />
          }
        /> 
      </Routes>
      
        
     
    </div>
  );
}

export default App;
