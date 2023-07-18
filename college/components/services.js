import React from 'react';

import { services } from '@/dummdata';

import Image from 'next/image';
const Services = () => {
  return (
    <div className='services  section-p' id = "services">
        <div className='container items-center w-[80%] ml-[10%]'>
            <div className='services-content'>
                <div className='section-title text-center pt-[40px]'>
                   <div className=' text-2xl'><h3 className='text-brown'>OUR <span className='text-dark'>SERVICES</span></h3></div> 
                 <div className='text-center'>   <p className='text'>We offer the state of the art learning programs</p></div>
                </div>

                <div className='services-list px-auto mb-[100px] grid mt-12  text-center'>
                    {
                        services.map((service, index) => {
                            return (
                                <div className='services-item text-center rounded-lg text-white bg-black' key = {index}>
                                    <div className='services-item-img'>
                                        <img src = {service.image}  alt = "" />
                                    </div>
                                    <div className='services-item-text'>
                                        <h4 className='fs-22 fw-5 op-08'>{service.title}</h4>
                                        <p className='text mx-auto'>{service.paragraph}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services