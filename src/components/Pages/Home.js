import Card from "../Card";
import { useContext } from "react";
import CardContext from "../../context";


const Home = ({
                searchValue,
                setSearchValue,
                onChangeInputValue,
                onAddFavorite,
                onAddToCart,
                isLoading
            }) => {

              
  const { items } = useContext(CardContext);
            
  const renderItems = () => {
      const filteredItems = items.filter(i => i.title.toLowerCase()
      .includes(searchValue.toLowerCase())); 
	return (isLoading ? [...Array(8)] : filteredItems)
        .map((item, index) => (                        
        <Card 
          key={index}
          onFavorite={(obj) => onAddFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          loading={isLoading}
          {...item}
        />
        ))
    }

    return (
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
            {renderItems()}
          </div>
      </div>
    )
}

export default Home;