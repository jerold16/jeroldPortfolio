import React, { useRef } from 'react'
import HalfEcxplice from './MiniComponents/HalfEcxplice'
import Instagram from '../Icons/Instagram'
import LinkedInIcon from '../Icons/LinkedInIcon'
import Github from '../Icons/Github'
import KeyBoardCords from './MiniComponents/KeyBoardCords'

const HomeBanner = () => {



    return (
        <div className='' id='home' >
            <main className='row container px-2 overflow-hidden mx-auto xl:min-h-[90vh] ' >
                <section
                    className='col-lg-6 min-h-[60vh] lg:min-h-[85vh] xl:min-h-[90vh]  overflow-hidden  
                                  relative my-auto flex justify-center items-center ' >
                    <div className=' w-[8rem] h-[8rem] rounded-es-full sm:rounded-es-none sm:rounded-ee-full utd bgclr absolute top-0 right-0 sm:left-0  ' >
                    </div>
                    <article className='relative z-10 ' >

                        <h2 className='txtclr bebas text-8xl sm:text-7xl lg:text-[11rem] dtu ' >Jerold <br />
                            <span className='text-white dtu' >Resume </span> </h2>
                        <p className='text-slate-500 poppins text-lg dtu' >I'm Mern Stack Web Developer <br /> with 1 year of experience </p>

                        <div className='flex w-full justify-between items-center dtu ' >
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
                    </article>
                </section>
                {/* Key Board */}
                <section className='col-lg-6  -rotate-90 sm:rotate-0 flex items-center ' >
                    <article className='my-auto w-full relative overflow-hidden ' >

                        <KeyBoardCords pannel='bgclr' audio='../Assset/music1.MP3'
                            pannelbtn='bg-slate-100 bg-opacity-20' cord />
                        {/* Second cord */}

                        <KeyBoardCords pannel='bg-white' audio='../Assset/music2.MP3' pannelbtn='bg-slate-800 bg-opacity-20' />
                        {/* 3rd cord */}

                        <KeyBoardCords pannel='bg-slate-700' audio='../Assset/music3.MP3' pannelbtn='bg-slate-100 bg-opacity-20' cord />
                        {/* 4rd cord */}

                        <KeyBoardCords pannel=' bgclr' audio='../Assset/music4.MP3' pannelbtn='bg-slate-100 bg-opacity-20' />
                        {/* 5th cord */}

                        <KeyBoardCords pannel=' bg-white d-none d-sm-flex ' audio='../Assset/music5.MP3' pannelbtn='bg-slate-800 bg-opacity-20' cord />
                        {/* 6th cord */}
                        <KeyBoardCords pannel='bg-slate-700 d-none d-sm-flex ' audio='../Assset/music1.MP3' pannelbtn='bg-slate-100 bg-opacity-20' />

                    </article>

                </section>

            </main>
        </div>
    )
}

export default HomeBanner