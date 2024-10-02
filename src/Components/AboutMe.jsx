import React from 'react'

const AboutMe = () => {
    return (
        <div id='about' className='min-h-[105vh] sm:min-h-[90vh] w-full relative container p-0 ' >
            <h5 className='relative top-0 flex ms-auto right-10 p-0 fw-bold
             text-violet-300 text-opacity-20 uppercase text-9xl m-0
    vrl sm:text-9xl md:text-[14rem] lg:text-[16rem] bebas text-nowrap' >About Me </h5>
            {/* Container */}

            <main className='container row absolute top-1/2 left-1/2
             -translate-y-1/2 -translate-x-1/2 min-h-[10vh] ' >
                <section className='col-lg-7 my-3 ' >
                    <img src={require('../Assset/computerImg.webp')} alt="Image" className='w-4/5 lg:w-3/5 lg:mx-auto ' />
                </section>
                <section className='col-lg-4 poppins flex items-center mt-3 ' >
                    <article>
                        <h5 className='text-5xl my-3 sm:text-5xl lg:text-7xl bebas ' > Jerold raja </h5>
                        <p className='mb-0 ' >
                            Hey there! As a web developer, my goal is always to create websites and web applications that are simple,
                            clean, and easy to use. Whether it's building a new site from scratch or fixing errors on an existing one,
                            the focus is always on making everything work smoothly. With experience in various tools like React.js and Express.js,
                            every project is handled with care to meet your exact needs.
                            Let’s make things easier and build something great together, exactly how you want it.</p>
                        {/* <p className='mb-0 mt-4 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum soluta pariatur impedit quia maiores totam
                            doloremque corrupti laboriosam, commodi recusandae eveniet a culpa quos fugiat nobis ipsum.
                            Facere sed minus laudantium ipsam
                            alias laboriosam vitae reprehenderit eum, qui porro? </p> */}
                    </article>
                </section>

            </main>
        </div>
    )
}

export default AboutMe