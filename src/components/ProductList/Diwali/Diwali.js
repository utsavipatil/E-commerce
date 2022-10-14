import { render } from '@testing-library/react'
import React from 'react'
import './Diwali.css'

const DiwaliListItems=[
  {
    id : 1,
    img : 'https://m.media-amazon.com/images/I/515jA106Y7L._AC_SY200_.jpg'
  },
  {
    id : 2,
    img : 'https://m.media-amazon.com/images/I/31Kk2yy1x5L._AC_SY200_.jpg'
  },
  {
    id : 3,
    img : 'https://m.media-amazon.com/images/I/61qy5fH0a7L._AC_SY200_.jpg'
  },
  {
    id : 4,
    img : 'https://m.media-amazon.com/images/I/81WJEfdfX9L._AC_SY200_.jpg'
  },
  {
    id : 5,
    img : 'https://m.media-amazon.com/images/I/710J9zVV3ZL._AC_SY200_.jpg'
  },

]



function Diwali() {
  return (
    <div className='diwali-container'>
      <div className='diwali-inner-container'>
          <div className='diwali-header'>Diwali Decorations</div>
          <div className='diwali-prduct-list'>
            {
              DiwaliListItems.map(Item => {
                return (
                  <div className='diwali-product-item'>
                    <img src={Item.img} width={200} height={200}/>
                  </div>
                )
              })
            }
          </div>
      </div>
      
    </div>
  )
}

export default Diwali