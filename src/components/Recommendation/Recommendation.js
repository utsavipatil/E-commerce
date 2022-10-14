import React from 'react'
import './Recommendation.css'
import RecommendationItem from './RecommendationItem'

const recommendationData = [
    {
        id: 1,
        title : 'tv',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price : 90,
        img:'https://images-eu.ssl-images-amazon.com/images/I/61EZlDcz++L._AC_UL160_SR160,160_.jpg'
    },
    {
        id: 2,
        title : 'tv',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price : 90,
        img:'https://images-eu.ssl-images-amazon.com/images/I/61EZlDcz++L._AC_UL160_SR160,160_.jpg'

    },
    {
        id: 3,
        title : 'tv',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price : 90,
        img:'https://images-eu.ssl-images-amazon.com/images/I/61EZlDcz++L._AC_UL160_SR160,160_.jpg'

    },
    {
        id: 4,
        title : 'tv',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price : 90,
        img:'https://images-eu.ssl-images-amazon.com/images/I/61EZlDcz++L._AC_UL160_SR160,160_.jpg'

    },
    {
        id: 5,
        title : 'tv',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price : 90,
        img:'https://images-eu.ssl-images-amazon.com/images/I/61EZlDcz++L._AC_UL160_SR160,160_.jpg'

    },
    {
        id: 6,
        title : 'tv',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price : 90,
        img:'https://images-eu.ssl-images-amazon.com/images/I/61EZlDcz++L._AC_UL160_SR160,160_.jpg'

    }
]

function Recommendation() {
  return (
    <div className='recommendation-container'>
        <div className='recommendation-header'>
            Recommendations
        </div>
        <div className='recommendation-list'>
            {
                recommendationData.map(item => 
                    <RecommendationItem
                        key={item.id}
                        title={item.title}
                        description = {item.description}
                        price = {item.price}
                        img = {item.img}
                    />
                )
            }
        </div>
    </div>
  )
}

export default Recommendation