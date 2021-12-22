
const Drawer = ({onClose, onRemove, items = []}) => {
    
  return (
      <div  className="overlay">
        <div className="drawer">
              <h2 className="mb-30 d-flex justify-between ">
                Cart 
                <img onClick={onClose} className="removeBtn cu-p"  width={32} height={32} src="img/btn-remove.svg" alt="Close" /> 
              </h2>

              <div className="items">
                { items.map( item => (
                    <div className="cartItem d-flex align-center mb-20">
                      <div 
                        style={{backgroundImage: `url(${item.imgUrl})`}} 
                        className="cartItemImg"
                      ></div>
                      <div  className="mr-20 flex">
                        <p className="mb-5">{item.title}</p>
                        <b>{item.price} EUR</b>
                      </div>
                      <img 
                        onClick={() => onRemove(item.id)}
                        className="removeBtn"  
                        width={32} 
                        height={32} 
                        src="img/btn-remove.svg" 
                        alt="remove" 
                      />  
                    </div>
                )
                )}
              </div>

              <div className="cartTotalBlock">
                <ul className="cartTotalBlock">
                  <li>
                    <span>Total:</span>
                    <div></div>
                    <b>2563 EUR</b>
                  </li>
                  <li>
                    <span>TAX 5%: </span>
                    <div></div>
                    <b>132 EUR</b>
                  </li>
                </ul>
                <button className='greenButton'>
                  Create order
                  <img src="img/arrowRight.svg" alt="arrowRight" />
                </button>
              </div>
            </div>
    </div>
    )
};

export default Drawer;