import React, { useContext, useState } from 'react'
import { Storage } from '../AppContext'

const ProjectSection = () => {
    let [selectedProject, setSelectedProduct] = useState(2)
    let { projects } = useContext(Storage)
    return (
        <div id='project' className='min-h-[60vh] sm:min-h-[90vh] relative container-fluid p-0 py-4 ' >
            <h5 className='relative rotate-180 top-0 left-0 fw-bold text-violet-300 text-opacity-20 uppercase text-9xl 
            vrl sm:text-9xl md:text-[14rem] lg:text-[16rem] bebas' >Projects </h5>
            {/* Accordion */}
            <main
                className=' container min-h-[50vh] sm:min-h-[80vh] 
                flex gap-2 mx-auto relative lg:absolute top-1/2 left-1/2 -translate-y-1/2 
            -translate-x-1/2 ' >
                {projects.map((obj, index) => (
                    <section onClick={() => setSelectedProduct(index)}
                        className={`cursor-pointer duration-700 min-h-[50vh] sm:min-h-[60vh] bg-black relative
                         ${selectedProject == index ? 'flex-1' : "flex-[0.3] sm:flex-[0.2] lg:flex-[0.1]  "}  `} >
                        <img src={obj.img ? obj.img : require('../Assset/5_6066513998474379431.jpg')}
                            className={` ${selectedProject == index ? " object-cover " : "object-cover gray"}
                             duration-300 h-full w-100  `} alt="Section" />
                        <article
                            className={` ${selectedProject == index ? "  absolute top-0 w-full h-full bg-slate-950 bg-opacity-20 "
                                : `w-full h-full top-0 absolute bg-opacity-50 bg-slate-800 
                            duration-500 `} text-white `} >
                            <h4 className={` absolute bebas  text-white duration-500
                                ${selectedProject == index ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ' :
                                    "bottom-10 left-1/2  vrl2 rotate-180 -translate-x-1/2"}
                                   `} > {obj.title} </h4>
                            <p className={`fw-semibold text-white poppins ${selectedProject == index ? "d-none " :
                                'bottom-0 absolute left-1/2 -translate-x-1/2  '}  `}>
                                00{index + 1} </p>

                        </article>
                    </section>
                ))}

            </main>

        </div>
    )
}

export default ProjectSection