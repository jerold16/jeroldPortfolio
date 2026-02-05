import React, { useContext, useState } from 'react'
import { Storage } from '../AppContext'

const ProjectSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(2)
    const { projects } = useContext(Storage)

    const reversedProjects = [...projects].reverse()

    return (
        <div id='project' className='min-h-[60vh] sm:min-h-[90vh] relative container-fluid p-0 py-4'>
            <h5 className='relative rotate-180 fw-bold text-violet-300 text-opacity-20 uppercase text-9xl vrl bebas'>
                Projects
            </h5>

            <main className='container min-h-[50vh] sm:min-h-[80vh] overflow-x-auto flex gap-2 mx-auto relative
                lg:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

                {[...reversedProjects].map((obj, index) => {
                    const isActive = selectedIndex === index
                    console.log(obj.title, index);

                    return (
                        <section
                            key={index}
                            onClick={() => {
                                if (isActive) {
                                    window.open(obj.url, '_blank')
                                } else {
                                    setSelectedIndex(index)
                                }
                            }}
                            className={`cursor-pointer duration-700 min-h-[50vh] sm:min-h-[60vh] bg-black relative
                                min-w-[6rem]
                                ${isActive
                                    ? 'flex-1 min-w-[70vw] sm:min-w-[40vw]'
                                    : 'flex-[0.3] sm:flex-[0.2] lg:flex-[0.1]'
                                }`}
                        >

                            <img
                                src={obj.img || require('../Assset/5_6066513998474379431.jpg')}
                                className={`object-cover duration-300 h-full w-full ${!isActive && 'gray'}`}
                                alt={obj.title}
                            />

                            <article className={`absolute inset-0 text-white duration-500
                                ${isActive ? 'bg-slate-950 bg-opacity-20' : 'bg-slate-800 bg-opacity-50'}`}>

                                <h4 className={`absolute bebas duration-500
                                    ${isActive
                                        ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
                                        : 'bottom-10 left-1/2 vrl2 rotate-180 -translate-x-1/2'
                                    }`}>
                                    {obj.title}
                                </h4>

                                {!isActive && (
                                    <p className='fw-semibold poppins absolute bottom-0 left-1/2 -translate-x-1/2'>
                                        00{reversedProjects.length - index}
                                    </p>
                                )}
                            </article>
                        </section>
                    )
                })}
            </main>
        </div>
    )
}

export default ProjectSection
