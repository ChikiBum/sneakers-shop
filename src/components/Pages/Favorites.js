import Card from "../Card";

const Favorites = ({
                        items,
                        favoriteItems,
                        onAddFavorite,
                        onFavoriteDelele,
                        onAddToCart,
                    }) => {

    return (
        <div className="content p-40">
             <h1 > Favorites: </h1>
          <div className="d-flex flex-wrap">
            {items.map((item, index) => (
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