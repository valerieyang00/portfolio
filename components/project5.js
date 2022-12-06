import ReactPlayer from 'react-player';

import { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'


export default function Project5() {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (

        <div className="md:w-[85vw] md:h-[30.5rem] w-[20.5rem] h-[50rem] p-4 rounded-2xl bg-slate-800 shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
            <div className=" h-full w-full  shadow-md rounded-2xl basis-3/3 relative">
                <div className="h-full w-full relative border-2 border-white text-center flex justify-center items-center">
                    <div className={styles.img}>
                    <img src='/comingsoon.png' alt='coming soon'/>
                    </div>
                    {/* {hasWindow && <ReactPlayer url="https://vimeo.com/777934212/285142fc69" className={styles.fill}
                        muted
                        playing={true}
                        alt="DreamVideo"
                        light="/dream1.png"
                        width="100%"
                        height="100%"

                    />} */}

                </div>
            </div>

            <div className=" h-full w-full mr-2 rounded-2xl ">
                {/* <p className="m-2 font-bold pl-1 text-lg text-[#4285F4]">Play Video 👉 </p> */}
                <h1 className="m-2 text-4xl font-bold text-[#e66c64]">
                    Flavorite <span className="pt-3 font-bold pl-1 text-lg text-white ">Group Project</span>
                </h1>
                {/* <p className="m-2 font-bold pl-1 text-lg text-white">Tech Used:<br></br> FrontEnd - Typescript, React, MaterialUI<br></br></p> */}
                <p className="m-2 pt-3 font-bold pl-1 text-lg text-white">Currently working with a team to build a fully-responsive consumer app, focusing on Front-end. <br></br></p>
                
                <p className="m-2 pt-3 font-bold pl-1 text-lg text-white"> Learning new skills and gaining experience in: <br></br> - Typescript with React <br></br> - Write and use OpenAPI Specification <br></br> - Unit testing with React-testing-library & Jest<br></br>- MaterialUI components <br></br> - Perform code reviews with my team </p>


                {/* <div className="flex flex-row mt-3">
                    <button className="md:m-2 m-auto mt-8 bg-[#e66c64] shadow-md shadow-[#e66c648a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                        <a href="https://dreamplanner-vy.netlify.app/" target="_blank" rel="noreferrer"><h1 className="text-white text-center font-semibold">
                            LIVE
                        </h1></a>
                    </button>
                    <button
                        className="md:m-2 m-auto mt-8 bg-[#e66c64] shadow-md shadow-[#e66c648a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300"
                    ><a href="https://github.com/valerieyang00/dream-planner-client" target="_blank" rel="noreferrer"><h1 className="text-white text-center font-semibold">
                        GITHUB
                    </h1></a> */}

                    {/* </button> */}
                </div>
            </div>
        // </div>
    );
}