import React from 'react'

const LinkedInIcon = ({ size }) => {
    return (
        <div>
            <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={size ? size : '24'}
                height={size ? size : '24'}

                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512", }} // Added width and height
                xmlSpace="preserve"
                fill='currentColor'
            >
                <g>
                    <g>
                        <g>
                            <rect x="162.909" y="221.091" width="46.545" height="128" />
                            <circle cx="186.182" cy="186.182" r="23.273" />
                            <path fill='currentColor' d="M465.455,0H46.545C20.839,0,0,20.839,0,46.545v418.909C0,491.161,20.839,512,46.545,512h418.909
				C491.161,512,512,491.161,512,465.455V46.545C512,20.839,491.161,0,465.455,0z M488.727,465.455
				c0,12.853-10.42,23.273-23.273,23.273H46.545c-12.853,0-23.273-10.42-23.273-23.273V46.545c0-12.853,10.42-23.273,23.273-23.273
				h418.909c12.853,0,23.273,10.42,23.273,23.273V465.455z"/>
                            <path fill='currentColor' d="M318.371,221.091c-34.909,0-39.098,20.713-39.098,20.713v-20.713h-46.545v128h46.545v-69.818c0,0,0-23.273,19.782-23.273
				c11.636,0,15.127,10.473,15.127,23.273v69.818h46.545v-69.818C360.727,242.851,344.902,221.091,318.371,221.091z"/>
                        </g>
                    </g>
                </g>
            </svg>

        </div>

    )
}

export default LinkedInIcon