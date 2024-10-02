import React, { useEffect, useRef, useState } from 'react'

const KeyBoardCords = ({ pannel, pannelbtn, cord, audio, audioRef, cordaudio, cordbtn }) => {

    const playAudio = () => {
        if (audio) {
            let documentId = document.getElementById(audio)
            documentId.play().then(() => {
                console.log("Audio is playing.");
            }).catch(error => {
                console.error("Error playing the audio:", error);
            });
        }
    };
    const stopAudio = () => {
        if (audio) {
            let documentId = document.getElementById(audio)
            documentId.pause()

        }
    };
    return (
        <div onMouseEnter={playAudio} 
        // onMouseLeave={stopAudio}
         className='relative ' >
            <audio ref={audioRef} src={audio} id={audio}>
            </audio>
            <div className={`  w-full hover:translate-x-[7px] duration-300 h-[100px] 
            ${pannel ? pannel : 'bgclr'} 
            my-2 rounded-s-xl relative flex items-center px-3 `} >
                <button className={` shadow-sm rounded-full w-[35px] h-[35px] 
                    ${pannelbtn ? pannelbtn : "bg-slate-100 bg-opacity-20"}  `} >

                </button>


            </div>
            {/* Small cord */}
            {cord && <div className={` w-3/5 hover:translate-x-[7px] duration-300 h-[100px] absolute bg-black right-0 top-1/2 z-10 rounded-s-xl `} >
                <button className={` shadow-sm top-1/2 absolute left-3 -translate-y-1/2 rounded-full w-[35px] h-[35px] bg-slate-100 bg-opacity-20  `} >
                </button>


            </div>}
        </div>
    )
}

export default KeyBoardCords