import { useState } from 'react';
import ContentLoader from "react-content-loader";
import styles from './Card.module.scss';


const Card = ({
                id,
                favorite, 
                img, 
                title, 
                price, 
                onPlus, 
                onFavorite = false,
                added = false,
                loading = false
              }) => {

    const [isAdded, setIsAdded] = useState(added);

    const onClickPlus = () => {
      console.log('on clock plus id: ', id)
      onPlus({id, img, title, price});
      setIsAdded(!isAdded)
    };

    const [isFavorite, setIsFavorite] = useState(favorite);
    
    const onClickFavorite = () => {
      setIsFavorite(!isFavorite);
      onFavorite({id, img, title, price})
    };
   
    return (
        <div className={styles.card}>
          {loading ?
            <ContentLoader 
                speed={2}
                width={150}
                height={250}
                viewBox="0 0 150 250"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="10" ry="10" width="122" height="155" /> 
                <rect x="4" y="168" rx="0" ry="0" width="91" height="34" /> 
                <rect x="12" y="207" rx="0" ry="0" width="78" height="37" /> 
                <rect x="41" y="307" rx="0" ry="0" width="229" height="39" /> 
                <circle cx="65" cy="407" r="24" /> 
                <rect x="106" y="168" rx="0" ry="0" width="15" height="82" /> 
                <rect x="22" y="249" rx="0" ry="0" width="67" height="45" />
              </ContentLoader> :
            <>
              <div className={styles.favorite} >
                { isFavorite ?
                <img onClick={onClickFavorite} src='img/heart-liked.svg' alt="heart-liked" />:
                  <img onClick={onClickFavorite} src='img/heart-unliked.svg' alt="heart-unliked" />
                }
              </div>
              <img width={133} height={112} src={img} alt="sneakers" />
              <h5>{title}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                  <span>Price: </span>
                  <b>{price} EUR</b>
                </div>
                  <img className={styles.plus} onClick={onClickPlus} src={isAdded ?  "img/btn-cheked.svg" : "img/btn-plus.svg"} alt="plus" />
              </div>
            </>
          }
        </div>
    )
}

export default Card; 