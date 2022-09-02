import React from 'react'
import Detils from './Detils';
import style from "./country.module.css"
const { v4: uuidv4 } = require('uuid');


const Country = ({countries, onRemove}) => {
  return (
   <section className={style.countries} >
    {countries.map((c)=>{

        return <Detils country={c}  key={uuidv4()}  onRemove={ onRemove} />

    })}
   </section>
  )
}

export default Country
