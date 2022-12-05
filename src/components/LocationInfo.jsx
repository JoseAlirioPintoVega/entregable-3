import React from 'react'

const LocationInfo = ({location}) => {
    
  return (
    <article className='location__container'>
        <h2 className='location__name'>{location?.name}</h2>
       <ul className='location__info'>
        <li className='location__item'><span>Type: </span>{location?.type}</li>
        <li className='location__item'><span>Dimention: </span>{location?.dimension}</li>
        <li className='location__item'><span>Population: </span>{location?.residents.length}</li>
       </ul>
    </article>
  )
}

export default LocationInfo