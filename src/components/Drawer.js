
const Drawer = (props) => {
    return (
      <div style={{display: 'block'}} className="overlay">
        <div className="drawer">
              <h2 className="mb-30 d-flex justify-between ">
                Cart 
                <img className="removeBtn cu-p"  width={32} height={32} src="img/btn-remove.svg" alt="remove" /> 
              </h2>

              <div className="items">
                <div className="cartItem d-flex align-center mb-20">
                  <div 
                    style={{backgroundImage: 'url(img/sneakers/1.jpg)'}} 
                    className="cartItemImg"
                  ></div>
                  <div  className="mr-20 flex">
                    <p className="mb-5">Mens Sneakers Nike Blazer Mid Suede</p>
                    <b>12 999 EUR</b>
                  </div>
                  <img className="removeBtn"  width={32} height={32} src="img/btn-remove.svg" alt="remove" />  
                </div>
                <div className="cartItem d-flex align-center mb-20">
                  <div 
                    style={{backgroundImage: 'url(img/sneakers/1.jpg)'}} 
                    className="cartItemImg"
                  ></div>
                  <div  className="mr-20 flex">
                    <p className="mb-5">Mens Sneakers Nike Blazer Mid Suede</p>
                    <b>12 999 EUR</b>
                  </div>
                  <img className="removeBtn"  width={32} height={32} src="img/btn-remove.svg" alt="remove" />  
                </div>
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