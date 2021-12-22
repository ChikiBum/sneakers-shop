import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
 
  useEffect(() => {
    axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/items').then(res => setItems(res.data))
    axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/cart').then(res => setCartItems(res.data))
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://61c227bf9dbcca0017c82393.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onAddFavorite = (obj) => {
    axios.delete(`https://61c227bf9dbcca0017c82393.mockapi.io/items/${obj.id}`);
    axios.post('https://61c227bf9dbcca0017c82393.mockapi.io/items', obj);
    axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/items').then(res => setItems(res.data));
  };

  const onRemoveFavorite = (obj) => {
    axios.delete(`https://61c227bf9dbcca0017c82393.mockapi.io/items/${obj.id}`);
    axios.post('https://61c227bf9dbcca0017c82393.mockapi.io/items', obj);
    axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/items').then(res => setItems(res.data));
  
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

      <div className="content p-40">
        <div className="d-flex align-center mb-40  justify-between">
          <h1 >{searchValue ? `Search for '${searchValue}'` : 'All Sneakers'}</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="search" />
            {searchValue && <img 
              onClick={() => setSearchValue('')}
              className="clear" 
              src="img/btn-remove.svg" 
              alt="clear" 
            />}
            <input 
              onChange={onChangeInputValue} 
              value={searchValue}
              type="text"   
              placeholder="Search sneakers..."
            />
          </div>
        </div>
          <div className="d-flex flex-wrap">
            {items.filter(i => i.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
              <Card 
                key={item.id}
                itemId={item.id}
                favorite={item.isFavorite}
                imgUrl={item.img} 
                title={item.title} 
                price={item.price}
                onAddFavorite={(obj) => onAddFavorite(obj)}
                onRemoveFavorite={(obj) => onRemoveFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
