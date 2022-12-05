
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import ErrorFetch from './components/ErrorFetch'
import LocationFilter from './components/LocationFilter'

function App() {
  const [location, setLocation] = useState()
  const [lotationInput, setLotationInput] = useState()
  const [hasError, setHasError] = useState(false)
  const [chanceInput, setChanceInput] = useState("")
  const [currentPage, setCurrentPage] = useState(0)


  useEffect(()=>{
    // the location  have only 126 elements
    let URL
    if(lotationInput){
      URL =`https://rickandmortyapi.com/api/location/${lotationInput}`
    }else{
      const randomIdLocation = Math.floor(Math.random()* 126) + 1; 

      URL= `https://rickandmortyapi.com/api/location/${randomIdLocation}`
    }

    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        console.log(err)
        /* setHasError(true) */
      })
  },[lotationInput])
  
  const handleSubmit = event =>{
    event.preventDefault()
    setLotationInput(event.target.inputSearch.value)

  }
  
  const handleChanceInput = event => {
    setChanceInput(event.target.value)
  }
/* funcion para conectar el onclick de location filter con el App */
  const getNewLocation = (URL , name) =>{
    setChanceInput(name)
    axios.get(URL)
     .then(res => setLocation(res.data))
     .catch(err => console.log(err))
  }

  /*  const itemsPerPag = 12;
   const newArray = location?.residents;
   console.log(newArray) */

 /*  const [itemsRender, setItemsRender] = useState([...newArray].splice(0, itemsPerPag))
  console.log (itemsRender) */
 
  return (
    <div className="App">
      <header className='App__header'>
        <form onSubmit={handleSubmit} className='form'>
          <input id='inputSearch' value={chanceInput} type="text" onChange={handleChanceInput} placeholder='Search your dimension'/>
          <button className='btn__Search'>Search</button>
        </form>
        <LocationFilter chanceInput={chanceInput} getNewLocation={getNewLocation}/>
      </header>
      
     {
      hasError
      ?
      <ErrorFetch/>
      :
      <>
        <LocationInfo
        location={location}
        />
        {/* <h1>{currentPage}</h1> */}
        <div className='resident-container'>
          
          {
            location?.residents.map(url =>(
              <ResidentCard 
              key={url}
              url={url}
              />
            ))
          }
        </div>
      </>
    }
  </div>
  )
}

export default App
