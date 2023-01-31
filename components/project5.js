
import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';


export default function Project5() {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (

        <div className="md:w-[85vw] md:h-[35rem] w-[21rem] h-[70rem] p-4 rounded-2xl bg-slate-800 shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
            <div className=" h-full w-full  shadow-md rounded-2xl basis-3/3 relative">
                <div className="h-full w-full relative border-2 border-white text-center flex justify-center items-center">
                    <div className={styles.img}>
                    <img src='/comingsoon.png' alt='coming soon'/>
                    </div>

                </div>
            </div>

            <div className=" h-full w-full mr-2 rounded-2xl ">
                <h1 className="m-2 text-4xl font-bold text-[#e66c64]">
                    Flavorite <span className="pt-3 font-bold pl-1 text-lg text-white ">Front-End Developer (Team project)</span>
                </h1>
                <p className="m-2 font-bold pl-1 text-lg text-white">Tech Used:<br></br> Typescript, React, MaterialUI, Jest <br></br></p>
                <p className="m-2 pt-3 font-bold pl-1 text-lg text-white">Consumer app that utilizes a network of food enthusiasts to provide reliable food recommendations. As the Front-end developer, I am focusing on building a fully-responsive and user-friendly experience. <br></br></p>
                
                <p className="m-2 pt-3 font-bold pl-1 text-lg text-white"> - Developing with Typescript and React <br></br> - Designing and using OpenAPI Specification for API endpoints <br></br> - Implementing unit tests using React-testing-library and Jest<br></br>- Incorporating MaterialUI components for styling <br></br> - Collaborating with my team for code reviews and contributions <br></br> </p>

                <div className="flex flex-row mt-3">
                    <button className="md:m-2 m-auto mt-8 bg-gray400 shadow-md shadow-gray300 p-2.5 rounded-xl flex flex-row justify-center items-center ease-linear duration-300" disabled>
                        {/* <a href="" target="_blank" rel="noreferrer"> */}
                        <h1 className="text-white text-center font-semibold">
                            LIVE
                        </h1>
                        {/* </a> */}
                    </button>
                    <button
                        className="md:m-2 m-auto mt-8 bg-[#e66c64] shadow-md shadow-[#e66c648a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300"
                    ><a href="https://github.com/flavorite/web-app" target="_blank" rel="noreferrer"><h1 className="text-white text-center font-semibold">
                        GITHUB
                    </h1></a>

                    </button>
                </div>
                </div>
            </div>

    );
}