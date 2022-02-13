

import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { useDispatch, useSelector } from 'react-redux';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';

export default function App() {
  //Adding of badge
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
        <div className="grid-container">
          <header className="row">
              <div>
                <Link to="/" className="brand"><img className="logo" src="/images/logo.png" alt="Logo"/> KONBINI</Link>
              </div>
              <div className='header-links'>
                <Link to="/cart"><i className="fa fa-shopping-cart"></i> CART{cartItems.length > 0 && ( <span className="badge">{cartItems.length}</span>)}</Link>
                {userInfo ? (
                    <div className="dropdown">
                      <Link to="#">
                        {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link className="white" to="#signout" onClick={signoutHandler}>
                           <i className="fa fa-sign-out"></i> LOGOUT
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to="/signin"><i className="fa fa-user"></i> SIGN IN</Link> 
                  )}
              
              </div>
          </header>
        
          <main>

             <Route path="/" component={HomeScreen} exact ></Route>
             <Route path="/product/:id" component={ProductScreen}></Route>
             <Route path="/cart/:id?" component={CartScreen}></Route>
             <Route path="/signin" component={SigninScreen}></Route>
            </main>

            <footer className="row center"> &copy; ALL RIGHTS RESERVED
            </footer>
        </div>
        </BrowserRouter>
  );
}

