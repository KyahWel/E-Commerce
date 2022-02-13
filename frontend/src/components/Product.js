import React from 'react'
import Rating from './Rating'

export default function Product(props){
    const {product} = props
    return(
        <div key={product._id} className="card inner">
            <a href={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.name}/>
            </a>
            <div className="card-body ">
                <a className="itemName" href={`/product/${product._id}`}><h2>{product.name}</h2></a>
                <Rating rating={product.rating} numReview={product.numReview}>
                    
                </Rating>
                <br></br>
                <div className="price"> PHP {product.price} </div>
             </div>
        </div>
    )
}