import React from 'react'

const SkillsSection = () => {
    let skills = [
        {
            name: 'javascript',
            percentage: 60,
        },
        {
            name: 'react',
            percentage: 80,
        },
        {
            name: 'Java',
            percentage: 75,
        },
        {
            name: 'Express',
            percentage: 70,
        },
        {
            name: 'Spring Boot',
            percentage: 70,
        },
    ]
    return (
        <div id='skill' className='min-h-[60vh] sm:min-h-[90vh] relative container-fluid p-0 py-4 ' >
            <h5 className='relative rotate-180 top-0 left-0 fw-bold text-violet-300 text-opacity-20 uppercase text-9xl 
            vrl sm:text-9xl md:text-[14rem] lg:text-[16rem] bebas' >Skills </h5>
            <main className='absolute top-1/2 left-1/2 container w-full -translate-y-1/2 -translate-x-1/2  ' >
                {
                    skills.map((obj, index) => (
                        <div className='my-3 ' >
                            <div className='flex justify-between items-center text-2xl text-opacity-90
                            uppercase text-slate-100 ' >
                                <h5>{obj.name} </h5>
                                <h5> {obj.percentage}% </h5>
                            </div>
                            <div className={`w-full my-2 bg-white h-[2rem] relative `}>
                                <div className={` absolute h-full top-0 w-[${obj.percentage}%] bgclr `} >

                                </div>

                            </div>

                        </div>
                    ))
                }

            </main>

        </div>
    )
}

export default SkillsSection