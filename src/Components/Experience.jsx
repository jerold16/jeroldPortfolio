import React, { useContext } from 'react'
import { Storage } from '../AppContext'

const Experience = () => {
  let { experience } = useContext(Storage)
  return (
    <div id='experience' className='min-h-[105vh] sm:min-h-[90vh] w-full relative container-fluid p-0 ' >
    <h5 className='relative top-0 flex ms-auto right-10 p-0 fw-bold
     text-violet-300 text-opacity-20 uppercase text-8xl m-0 vrl
 sm:text-9xl md:text-[14rem] lg:text-[14rem] bebas text-nowrap' > Experience </h5>
      <main className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container w-full ' >
        <h5 className='bebas text-5xl sm:text-7xl ' >Work <br /> Positions </h5>
        {
          experience.map((obj, index) => (
            <section className='border-b-2 border-slate-100 border-opacity-70 text-xl poppins row py-3' >
              <div className='col-md-5 fw-semibold text-3xl my-2 flex justify-between '>
                <h5 className='fw-semibold text-2xl' >{obj.period} </h5>
                <h5 className='fw-semibold text-2xl' >{obj.company} </h5>
              </div>
              <div className='col-md-6 my-2 ' >
                <h5>{obj.role} </h5>

                {obj.description.map((val) => (
                  <p className='text-sm my-2' > {val}
                  </p>
                ))}
              </div>
            </section>
          ))
        }

      </main>
    </div>
  )
}

export default Experience