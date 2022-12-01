import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'


export default function Project2() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="md:w-[85vw] md:h-[33rem] w-[20.5rem] h-[50rem] p-4 rounded-2xl bg-slate-800 shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-3/3 relative">
        <div className="h-full w-full relative border-2 border-white">
          {hasWindow && <ReactPlayer url="https://vimeo.com/775616029/87a299b86d" className={styles.contain}
            volume="1"
            muted
            playing={true}
            alt="ThisWeekendVideo"
            light="/weekend1.png"
            width="100%"
            height="100%"

          />}

        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-[#4285F4]">Play Video 👉 </p>
        <h1 className="m-2 text-4xl font-bold text-[#e66c64]">
          This Weekend <span className="pt-3 font-bold pl-1 text-lg text-white">Solo Project</span>
        </h1>
        <p className="m-2 font-bold pl-1 text-lg text-white">Tech Used:<br></br> - Node, Express, PostgreSQL, Sequelize, EJS templates, BootstrapCSS<br></br></p>
        <p className="m-2 pt-3 font-bold pl-1 text-lg text-white">Developed a full-stack application incorporating a web API where users are able to browse and save acvities by category, log progress, write reviews, and post & comment on public feeds.</p>
        <p className="m-2 pt-3 font-bold pl-1 text-lg text-white">LOGIN information to explore Live site: <br></br>Email: test@g.com <br></br>Password: tester</p>

        <div className="flex flex-row mt-3">
          <button className="md:m-2 m-auto mt-8 bg-[#e66c64] shadow-md shadow-[#e66c648a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
            <a href="https://thisweekend-valerieyang00.koyeb.app/" target="_blank" rel="noopener noreferrer"><h1 className="text-white text-center font-semibold">
              LIVE
            </h1></a>
          </button>
          <button
            className="md:m-2 m-auto mt-8 bg-[#e66c64] shadow-md shadow-[#e66c648a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300"
          ><a href="https://github.com/valerieyang00/Project-2" target="_blank" rel="noopener noreferrer"><h1 className="text-white text-center font-semibold">
            GITHUB
          </h1></a>

          </button>
        </div>
      </div>
    </div>
  );



}