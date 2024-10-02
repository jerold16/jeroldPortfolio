import React, { useState } from 'react'
import BoxIcon from '../Icons/BoxIcon';
import Slider from 'react-slick';
import CodeSlash from '../Icons/CodeSlash';

const ServiceSection = () => {
    let [activeCard, setActiveCard] = useState(0)
    var settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        rtl: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1131,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let content = [
        {
            num: '01',
            icon: BoxIcon,
            heading: 'Websites',
            content: `Get a clean, user-friendly website that looks great on any device. Everything is designed to work smoothly and load fast, 
            making your online presence stand out. `
        },
        {
            icon: CodeSlash,
            num: '03',
            heading: 'Web Applications ',
            content: `I build custom web apps that suit your business needs. These are easy to use, reliable, and built to handle whatever you throw at them,
             making your tasks easier.`
        },
        {
            icon: BoxIcon,
            num: '02',
            heading: 'Corrections ',
            content: `Got bugs or issues with your current site? Don’t worry, I’ll fix them quickly, so your website runs smoothly and gives your 
            visitors the best experience possible.`
        },

    ]
    return (
        <div id='service' className='min-h-[60vh] sm:min-h-[90vh] relative container-fluid p-0 py-4 ' >
            <h5 className='relative rotate-180 top-0 left-0 fw-bold text-violet-300 text-opacity-20 uppercase text-9xl 
            vrl sm:text-9xl md:text-[14rem] lg:text-[16rem] bebas' >Services </h5>
            {/* Service section */}
            <div className='absolute top-1/2  container left-1/2 -translate-x-1/2 
            col-lg-10 mx-auto -translate-y-1/2 ' >
                {/* Card */}
                <Slider {...settings}>

                    {content.map((obj, index) => (
                        <div onClick={() => setActiveCard(index)}
                            className={` duration-500 cursor-pointer p-5 w-[10rem] ${activeCard == index ? "bgclr text-slate-800 " : "bgclr1 text-slate-100 "} poppins `} >
                            <section className={`flex justify-between ${activeCard == index ? 'text-slate-800' : "text-slate-100"} 
                            text-xl fw-semibold items-center `}>
                                {obj.num}
                                <span className={` ${activeCard == index ? ' ' : 'txtclr '} `} >
                                    <obj.icon size={28} />
                                </span>
                            </section>
                            {/* Content */}
                            <h4 className='bebas my-4 fw-semibold lspacing text-4xl  ' > {obj.heading} </h4>
                            {<p className={`pe-3 ${activeCard == index ? 'h-fit ' : 'h-0 overflow-hidden '} `} >
                                {obj.content} </p>}

                        </div>
                    ))}

                </Slider>
            </div>

        </div>
    )
}

export default ServiceSection