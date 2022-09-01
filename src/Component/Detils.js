import React from 'react'

const Detils = ({country}) => {

  const {name,flags,capital,population,area}= country
  return (
    <div>
        <article>
            <div>
                <img src={flags.png} />
                <h3>Name={name.common}</h3>
                <h3>Capital={capital}</h3>
                <h3>Population={population}</h3>
                <h3>Area={area}</h3>
            </div>
        </article>
    </div>
  )
}

export default Detils
