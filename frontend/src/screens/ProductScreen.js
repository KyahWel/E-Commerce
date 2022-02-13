import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

import {useDispatch, useSelector} from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useEffect, useState } from 'react';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {  
    const dispatch=useDispatch();
    const productId= props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails= useSelector((state)=> state.productDetails);
    const {loading, error, product}= productDetails;
        useEffect(()=>{
            dispatch(detailsProduct(productId));
        }, [dispatch, productId])
        const addToCartHandler = () => {
            props.history.push(`/cart/${productId}?qty=${qty}`);
        };

return (
    <div>
            {loading ? (<LoadingBox></LoadingBox>) 
            :error ? (<MessageBox variant="danger">{error}</MessageBox>)
            :( 
                <div className='container'>
        <div className="rowb top">
        
            <div className="col-2">
                
            <img className="large" src={product.image} alt={product.name}></img>
            </div>

            <div className="col-1">
            <ul>
                <Link to="/"><b><i className="fa fa-arrow-left"></i> Back to item lists</b></Link>
                <li><h1>{product.name}</h1></li>
                <li> <Rating rating={product.rating} numReview={product.numReview}></Rating></li>
                <li>Description: <p>{product.description}</p></li>
            </ul>
            </div>

            <div className="col-1 cart">
                <div className='cardb card-body'>
                    <ul>
                        <li>
                            <div className='rowb'>
                                <div className="cart-text">PRICE:</div>
                                <div className="price">PHP {product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='rowb'>
                                <div className="cart-text">
                                    STATUS:
                                </div>
                                <div className="status-text">
                                    {product.countInStock > 0 ? (<span className='success'>In Stock</span>) : (<span className='error'>Unavailable</span>) }
                                </div>
                            </div>
                        </li>
                            {
                        product.countInStock > 0 &&(
                        <>
                        <li>
                            <div className="rowb">
                            <div className="cart-text">QUANTITY:</div>
                            <div >
                                <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                               >
                                {[...Array(product.countInStock).keys()].map(
                                    (x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                    )
                                )}
                                </select>
                            </div>
                            </div>
                        </li>
                        <li>
                            <button  onClick={addToCartHandler} className="primary block"><i className="fa fa-shopping-cart"></i> ADD TO CART</button>
                        </li>
                        </>
                       
                    )
                }
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
            )
            } 
    </div>
    
);
}
