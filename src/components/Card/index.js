import { useState } from 'react';
import styles from './Card.module.scss'

const Card = ({itemId, favorite, imgUrl, title, price, onPlus, onAddFavorite, onRemoveFavorite}) => {

    const [isAdded, setIsAdded] = useState(false);
    const onClickPlus = () => {
      onPlus({imgUrl, title, price});
      setIsAdded(!isAdded)
    };

    const [isFavorite, setIsFavorite] = useState(favorite);
    
    const onClickFavorite = () => {
      setIsFavorite(prev => !prev);
      
      { isFavorite ?
        onRemoveFavorite({id: itemId, isFavorite, img: imgUrl, title, price}) :
        onAddFavorite({id: itemId, isFavorite, img: imgUrl, title, price}) 
      }
    };
   
    return (
        <div className={styles.card}>
              <div className={styles.favorite} >
                { favorite ?
                <img onClick={onClickFavorite} src='img/heart-liked.svg' alt="heart-liked" />:
                  <img onClick={onClickFavorite} src='img/heart-unliked.svg' alt="heart-unliked" />
                }
              </div>
              <img width={133} height={112} src={imgUrl} alt="sneakers" />
              <h5>{title}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                  <span>Price: </span>
                  <b>{price} EUR</b>
                </div>
                  <img className={styles.plus} onClick={onClickPlus} src={isAdded ?  "img/btn-cheked.svg" : "img/btn-plus.svg"} alt="plus" />
              </div>
            </div>
    )
}

export default Card; 