import { useEffect, useState } from "react";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Pages/Favorites";
import CardContext from "./context";


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsSummury, setCartItemsSummury] = useState('0');
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const cartResponse = await axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/favorits');
      const itemsResponse = await axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/items');

      setIsLoading(false);
      
      setCartItems(cartResponse.data);
      setFavoriteItems(favoritesResponse.data);
      setItems(itemsResponse.data);
      
    };
    
    fetchData();
    
  }, []);

  const calculateSum = async () => {
    const { data } = await axios.get('https://61c227bf9dbcca0017c82393.mockapi.io/cart');
  
    console.log('cartResponse: ', data)
    setCartItemsSummury(data
      .reduce((acc, item) => {
      return Number(acc) + Number(item.price) 
    }, 0))
    console.log('cartItemsSummury: ', cartItemsSummury)
  }
  const onAddToCart = async (obj) => {
    try{
      if (cartItems.find(item => Number(item.myId) === Number(obj.myId))){
        const forDeleteId = cartItems.find(item => Number(item.myId) === Number(obj.myId)).id;
        const { data } = await axios.delete(`https://61c227bf9dbcca0017c82393.mockapi.io/cart/${forDeleteId}`);
        setCartItems(prev => prev.filter(item => Number(item.myId) !== Number(obj.myId)));
        calculateSum();
      } else {
        const { data } = await axios.post('https://61c227bf9dbcca0017c82393.mockapi.io/cart', obj);
        setCartItems(prev => [...prev, data]);
        calculateSum();
      }
    } catch {
      alert('SORRY ERROR!')
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61c227bf9dbcca0017c82393.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
  };

  const onAddFavorite = async (obj) => {
    try{
      if (favoriteItems.find(item => Number(item.id) === Number(obj.id))){
        axios.delete(`https://61c227bf9dbcca0017c82393.mockapi.io/favorits/${obj.id}`);
        setFavoriteItems(prev => prev.filter(item => Number(item.id)!== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://61c227bf9dbcca0017c82393.mockapi.io/favorits', obj);
        setFavoriteItems(prev => [...prev, data]);
      }
    } catch {
      alert('SORRY ERROR!')
    }
  };

  const onChangeInputValue = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.myId) === Number(id));
  }

  return (
    <CardContext.Provider value={{items, cartItems, favoriteItems, isItemAdded}}>
      <div className="wrapper clear">
        
        {cartOpened && <Drawer 
                        items={cartItems} 
                        onClose={() => 
                        setCartOpened(false)} 
                        onRemove={onRemoveItem}/>}
        <Header onClickCart={() => setCartOpened(true)} itemsSum={cartItemsSummury}/>

        <Routes>
          <Route 
            path="/" 
            element = {
              <Home 
                favorite={false}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeInputValue={onChangeInputValue}
                items={items}
                onAddFavorite={onAddFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          /> 
          <Route 
            path="/favorites" 
            element = {
              <Favorites
                onAddFavorite={onAddFavorite}
                onAddToCart={onAddToCart}
              />
            }
          /> 
        </Routes>
        
          
      
      </div>
    </CardContext.Provider>
  );
}

export default App;
