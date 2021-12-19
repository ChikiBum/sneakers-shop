
const Card = ({img, heart, name, price}) => {
    
    return (
        <div className="card">
              <div className="favorite">
                <img src={heart} alt="heart-unliked" />
              </div>
              <img width={133} height={112} src={img} alt="sneakers" />
              <h5>{name}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                  <span>Price: </span>
                  <b>{price}</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="img/plus.svg" alt="plus" />
                </button>
              </div>
            </div>
    )
}

export default Card; 