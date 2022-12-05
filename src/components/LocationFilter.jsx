import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const LocationFilter = ({chanceInput, getNewLocation}) => {

    const [locationOptions, setLocationOptions] = useState()

    useEffect(()=>{ 
        if(!chanceInput)  {
            setLocationOptions()
            return
        }
        const URL = `https://rickandmortyapi.com/api/location?name=${chanceInput}`
        axios.get(URL)
         .then(res => setLocationOptions(res.data.results))
         .catch(err => console.log(err))
    },[chanceInput])

  return (
    <ul className='list' >
        {
            locationOptions?.map( locationOption => (
                    <li className='list__item' key={locationOption.url}
                    onClick={() => {getNewLocation(locationOption.url , locationOption.name)
                        return setLocationOptions()}
                    }>
                        {locationOption.name}
                    </li>
                )
            )
        }

    </ul>
  )
}

export default LocationFilter