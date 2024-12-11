import React from 'react'
import './Services.css'
import Services_Data  from '../../assets/serviceData'

function Services() {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>My Services</h1>
        </div>
        <div className="services-container">
            {
                Services_Data.map((service,index)=>{
                    return <div key={index} className='services-format'>
                            <h3>{service.id}</h3>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <div className="services-readmore">
                                <p>Read More</p>
                                <p>arrow</p>
                            </div>
                        </div>
                })
            }
        </div>
    </div>
  )
}

export default Services
