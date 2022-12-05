import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ResidentCard = ({url}) => {
    
    const [resident, setResident] = useState()

    useEffect(()=>{
        axios.get(url)
            .then(res=> setResident(res.data))
            .catch(err => console.log(err))
    }, [])
    
  return (
    <section className='container'>
      <article className='card'>
          <header className='card__header'>
              <h3 className='card__name'>{resident?.name}</h3>
                  <img className='card__img' src={resident?.image} alt="" />
                  <div className='card__status'>
                    <div className={`card__status-circle ${resident?.status}`}></div> 
                    <span className='card__status-label'>{resident?.status}</span>
                  </div>
             
          </header>
        <main className='card__main'>
              <ul className='card__list'>
                  <li className='card__item'><span>Species: </span>{resident?.species}</li>
                  <li className='card__item'><span>Origin :</span>{resident?.origin.name}</li>
                  <li className='card__item'><span>N° of episodes:</span>{resident?.episode.length}</li>
              </ul>
        </main>
      </article>
    </section>
  )
}

export default ResidentCard