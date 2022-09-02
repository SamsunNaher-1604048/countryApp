import React, { useEffect, useState } from 'react'

const Search = ({ConSearch}) => {
    const [search,Setsearch]=useState()
    const onChangeText=(event)=>{
        Setsearch(event.target.value)
    }

    useEffect(()=>{
    ConSearch(search)
   },[search])

  return (
    <div style={{textAlign:'center'}}>
        <input type='text' placeholder='Search......' value={search} onChange={onChangeText}></input>
    </div>
  )
}

export default Search
