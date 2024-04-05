import React from 'react'

const Persons = ({image, name, age}) => {
  return (
    <article className='person'>
        <img src={image} alt={name} className='img' />
        <div>
            <h4>{name}</h4>
            <p>{age} years</p>
        </div>
    </article>
  )
}

export default Persons
