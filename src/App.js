import React, { useEffect, useState } from 'react'
import Country from './Component/Country'
import './App.css'
import Search from './Component/Search'
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

  const onRemoveCountruy=(name)=>{
    const filter = countries.filter((con)=>con.name.common!==name)
    Setcountries(filter)
    
  }

  const ConSearch=(search)=>{

   const Searchcountry = countries.filter((con)=>{
    let conname=con.name.common.toLowerCase()
    return conname.startsWith(search)
   })
   Setcountries(Searchcountry)
   
  }


  useEffect(()=>{
    fatchData(url)
  },[ ])

  

  return (
    <>
      <h1>Country App</h1>
      <Search  ConSearch={ConSearch}/>
      {islodding && <h2>Lodding...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries&&<Country countries={countries}  onRemove={onRemoveCountruy}/>}
    </>
  )
}

export default App
