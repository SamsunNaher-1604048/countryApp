import React from 'react'
import style from "./detils.module.css"

const Detils = ({country, onRemove}) => {
  const {name,flags,capital,population,area}= country

  const Delete =(name)=>{
    onRemove(name)
  }

  return (
    <div>
        <article className={style.country}>
            <div>
                <img src={flags.png} alt={name.common} className={style.flag} />
                <h3>Name={name.common}</h3>
                <h3>Capital={capital}</h3>
                <h3>Population={population}</h3>
                <h3>Area={area}</h3>
                <button className={style.btn} onClick={()=>Delete(name.common)}>Remove Country</button>
            </div>
        </article>
    </div>
  )
}

export default Detils
