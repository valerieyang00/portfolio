import ReactPlayer from 'react-player';

import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';


export default function Project3() {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (

        <div className="md:w-[85vw] md:h-[35rem] w-[21rem] h-[60rem] p-4 rounded-2xl bg-slate-800 shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
            <div className=" h-full w-full  shadow-md rounded-2xl basis-3/3 relative">
                <div className="h-full w-full relative border-2 border-white">
                    {hasWindow && <ReactPlayer url="https://vimeo.com/777127493/20f7d75424" className={styles.fill}
                        muted
                        playing={true}
                        alt="petSpace video"
                        light="/pet1.png"
                        width="100%"
                        height="100%"

                    />}

                </div>
            </div>

            <div className=" h-full w-full mr-2 rounded-2xl ">
                <p className="m-2 font-bold pl-1 text-lg text-[#4285F4]">Play Video 👉 </p>
                <h1 className="m-2 text-4xl font-bold text-[#e66c64]">
                    PetSpace <span className="pt-3 font-bold pl-1 text-lg text-white">Group Project</span>
                </h1>
                <p className="m-2 font-bold pl-1 text-lg text-white">Tech Used:<br></br> - MongoDB, Express, React, Node, Cloudinary, BootstrapCSS<br></br></p>
  
                <p className="m-2 pt-3 font-bold pl-1 text-lg text-white">Created a social-networking application using the MERN stack. <br></br>
                We built a variety of features that allow users to connect and engage with each other, including the ability to like and comment on posts. One of the key features we built was the ability for users to upload photos, which we accomplished by integrating Cloudinary into our application. Our team also gained invaluable experience in working together as developers, using Git for version control and project management tools to stay organized and on track.</p>


                <div className="flex flex-row mt-3">
                    <button className="md:m-2 m-auto mt-8 bg-[#e66c64] shadow-md shadow-[#e66c648a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                        <a href="http://petspace-vy.netlify.app" target="_blank" rel="noreferrer" ><h1 className="text-white text-center font-semibold">
                            LIVE
                        </h1></a>
                    </button>
                    <button
                        className="md:m-2 m-auto mt-8 bg-[#e66c64] shadow-md shadow-[#e66c648a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300"
                    ><a href="https://github.com/valerieyang00/petspace-p3-client" target="_blank" rel="noreferrer"><h1 className="text-white text-center font-semibold">
                        GITHUB
                    </h1></a>

                    </button>
                </div>
            </div>
        </div>
    );




}