import React, { useEffect, useState } from 'react'
import Country from './Component/Country'
const url= 'https://restcountries.com/v3.1/all'
const App = () => {

  const [islodding,Setislodding]=useState(false)
  const [error,Seterror]=useState(null)
  const [countries,Setcountries]= useState([])


  const fatchData= async(url)=>{
    Setislodding(true)
    try {
      const responce = await fetch(url)
      const data = await responce.json()
      Setcountries(data)
      Setislodding(false)
      Seterror(null)

      
    } catch (error) {
      Setislodding(false)
      Seterror(error)
    }
  }


  useEffect(()=>{
    fatchData(url)
    console.log(countries)
  },[ ])

  return (
    <>
      <h1>Country App</h1>
      {islodding && <h2>Lodding...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries&&<Country countries={countries}/>}
    </>
  )
}

export default App
