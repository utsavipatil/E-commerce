import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React from 'react'
import './RecommendationItem.css'

function RecommendationItem({key, title, description, price , img}) {
  return (
    <div className='item-container'>
        <img src = {img}/>
        <div className='item-info'>
            <div className='item-title'>
                {title}
            </div>
            <div className='item-description'>
                {description}
            </div>
            <div className='item-footer'>
                <div className='item-price'>
                 💲{price}
                </div>
                <div className='item-old-price'>
                    {price*0.95}
                </div>
            </div>
            <div className='item-footer-btn '>
                <button className='item-card-btn btn-primary'>
                    Add to Cart
                </button>
                <button className='item-card-btn btn-secondary'>
                    Add to wishlist
                </button>
            </div>
        </div>
    </div>
  )
}

export default RecommendationItem