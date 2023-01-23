
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

        <div className="md:w-[85vw] md:h-[30.5rem] w-[20.5rem] h-[50rem] p-4 rounded-2xl bg-slate-800 shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
            <div className=" h-full w-full  shadow-md rounded-2xl basis-3/3 relative">
                <div className="h-full w-full relative border-2 border-white text-center flex justify-center items-center">
                    <div className={styles.img}>
                    <img src='/comingsoon.png' alt='coming soon'/>
                    </div>

                </div>
            </div>

            <div className=" h-full w-full mr-2 rounded-2xl ">
                <h1 className="m-2 text-4xl font-bold text-[#e66c64]">
                    Flavorite <span className="pt-3 font-bold pl-1 text-lg text-white ">Group Project</span>
                </h1>

                <p className="m-2 pt-3 font-bold pl-1 text-lg text-white">I am currently working with a team on an in-progress project called Flavorite - a consumer app that utilizes a network of food enthusiasts to provide reliable food recommendations. As the Front-end developer, I am focusing on building a fully-responsive and user-friendly experience. <br></br></p>
                
                <p className="m-2 pt-3 font-bold pl-1 text-lg text-white"> This project is an opportunity for me to learn new skills and gain experience in: <br></br> - Developing with Typescript and React <br></br> - Designing and using OpenAPI Specification for API endpoints <br></br> - Implementing unit tests using React-testing-library and Jest<br></br>- Incorporating MaterialUI components for styling <br></br> - Collaborating with my team for code reviews and contributions <br></br> </p>

                <p className="m-2 pt-3 font-bold pl-1 text-lg text-white">  I am excited to share this project and look forward to updating with the final product. <br></br> #Flavorite #React #MaterialUI #OpenAPI #frontenddevelopment</p>

                </div>
            </div>

    );
}