import React from 'react'
import imagen from '../imagen/1.png'
import imagen2 from '../imagen/2.png'

const Home = () => {
  return (
    
    <section className='section1'>
       

        <div className='columns'>
          <div className='col1'>
          <a href="Login">
          <img  src={imagen} alt='Mi Imagen' />
          </a>
           </div>
          <div className='col2'>
            <img src={imagen2}alt='Mi Imagen' />
          </div>
        </div> 
      
    </section>
    
  
  )
}

export default Home