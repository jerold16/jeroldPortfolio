import React from 'react'
import Instagram from '../Icons/Instagram'
import Github from '../Icons/Github'
import LinkedInIcon from '../Icons/LinkedInIcon'

const ContactSection = () => {
    return (
        <div id='contact' className='min-h-[80vh]  sm:min-h-[90vh] w-full relative container-fluid p-0 ' >
            <main className='container mx-auto  ' >
                <h5 className='uppercase txtclr text-8xl sm:text-9xl lg:text-[11rem] bebas  ' >Have An Idea ? </h5>
                <h6 className='uppercase text-slate-100 text-opacity-90 bebas text-8xl sm:text-9xl lg:text-[11rem]
                     ' >Let's work <br /> Together </h6>
                <div className='flex  justify-between items-center px-3 my-3 dtu w-[22rem] ' >
                    <div className='text-lg flex gap-2 items-center '> <div className='w-[2px] dotani h-[2px] bg-green-500 rounded-full p-1 ' >
                    </div> Available for work  </div>
                    <hr className='border-2 rotate-90 w-10 border-slate-50 ' />
                    <div className='flex gap-3 ' >

                        <a href='https://www.instagram.com/a_l_b_a_t_r_o_zzzzz/' target='_blank'
                            className='text-slate-50 hover:text-violet-400 cursor-pointer ' > <Instagram /> </a>
                        <a href='https://github.com/jerold16/' target='_blank'
                            className='text-slate-50 hover:text-violet-400 cursor-pointer ' > <Github /> </a>
                        <a href='https://www.linkedin.com/in/jerold-raja-singh-i-512179280/' target='_blank'
                            className='text-slate-50 hover:text-violet-400 cursor-pointer ' > <LinkedInIcon /> </a>

                    </div>
                </div>
            </main>

        </div>
    )
}

export default ContactSection