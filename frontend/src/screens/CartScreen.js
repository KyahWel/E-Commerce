import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
   
    <div className="row top">
      
      <div className="col-2 ">
      
        <h1><i className="fa fa-shopping-cart"></i> My Shopping Cart</h1>
        <Link to="/"><b><i className="fa fa-arrow-left"></i> Back to item lists</b></Link>
        <div className=''>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
         
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="">
                  <div className="">
                    <div className='row-items'>
                      <div className="col ">
                        <img src={item.image} alt={item.name} className="small"></img>
                      </div>
                      <div className="col">
                        <div className='row-desc '>
                          <Link className="link-item" to={`/product/${item.product}`}>{item.name}</Link>
                        </div>
                        <div className='row-desc'>
                          <div className="col-desc price-text">
                            PHP {item.price} 
                          </div>
                          <div className="col-desc">
                            <select
                                className='col-qty'
                                value={item.qty}
                                onChange={(e) =>
                                  dispatch(
                                    addToCart(item.product, Number(e.target.value))
                                  )
                                }
                              >
                                {[...Array(item.countInStock).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                            </select> 
                          </div>
                         
                        </div>
                        <div>
                          <div className='row-desc-center'>
                              <button
                                className='deleteButton'
                                type="button"
                                onClick={() => removeFromCartHandler(item.product)}
                              >
                                <i class="fa fa-minus-circle"></i> Delete
                              </button>    
                          </div>           
                        </div>
                         
                                    
                      </div>
                      <div className='col borders'>
                                 
                      </div>
                    </div>
                </div>
                </div>
              </li>
            ))}
          </ul>
        )}  
        <div className="container-checkout">
          <div className="card card-body checkout">
            <ul>
              <li>
                <h1 className='white'>
                  Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : PHP <span> </span> 
                  {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h1>
              </li>
              <li>
                <button
                  type="button"
                  onClick={checkoutHandler}
                  className="checkoutButton"
                  disabled={cartItems.length === 0}
                >
                  PROCEED TO CHECK OUT
                </button>
              </li>
            </ul>
          </div> 
        </div>
    
    </div>
      </div>
     
    </div>
  );
}