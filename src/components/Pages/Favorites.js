import Card from "../Card";

import { useContext } from "react";
import CardContext from "../../context";

const Favorites = ({
                        onAddFavorite,
                        onAddToCart,
                    }) => {

const {favoriteItems} = useContext(CardContext)
 
    return (
        <div className="content p-40">
             <h1 > Favorites: </h1>
          <div className="d-flex flex-wrap">
            {favoriteItems.map((item, index) => (
              <Card 
                key={index}
                favorite={true}
                onFavorite={(obj) => onAddFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                {...item}
              />
            ))}
          </div>
      </div>
    )
}

export default Favorites;