import React from 'react'
import Detils from './Detils';
const { v4: uuidv4 } = require('uuid');

const Country = ({countries}) => {
  return (
   <section>
    {countries.map((c)=>{

        return <Detils country={c}  key={uuidv4()} />

    })}
   </section>
  )
}

export default Country
