import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from '../styles/Home.module.css';

export default function Project1() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="md:w-[85vw] md:h-[32rem] w-[21rem] h-[55rem] p-4 rounded-2xl bg-slate-800 shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-3/3 relative">
        <div className="h-full w-full relative border-2 border-white">
          {hasWindow && <ReactPlayer url="https://vimeo.com/775603476/bb84ecda7f" className={styles.fill}
            volume= {1}
            playing={true}
            alt="GameVideo"
            light="/game1.png"
            width="100%"
            height="100%"

          />}

        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-[#4285F4]">Play Video 👉 </p>
        <h1 className="m-2 text-4xl font-bold text-[#e66c64]">
          Kitty Treasure Guard <span className="pt-3 font-bold pl-1 text-lg text-white">Solo Project</span>
        </h1>
        <p className="m-2 font-bold pl-1 text-lg text-white">Tech Used:<br></br> - Javascript, HTML-Canvas, CSS<br></br></p>
        <p className="m-2 pt-3 font-bold pl-1 text-lg text-white">Built a web-game using JavaScript and the HTML5 canvas element. <br></br> It is a game where the player controls a character and must protect its treasures from ants. The player must use different abilities to stop the ants and score points. It includes traps to avoid and red blocks to stay away from for higher score potential. The game is available in easy/medium/hard mode with a maximum game time of 1 minute.</p>



        <div className="flex flex-row mt-3">
          <button className="md:m-2 m-auto mt-8 bg-[#e66c64] shadow-md shadow-[#e66c648a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
            <a href="https://valerieyang00.github.io/Project-1/" target="_blank" rel="noreferrer" ><h1 className="text-white text-center font-semibold">
              LIVE
            </h1></a>
          </button>
          <button
            className="md:m-2 m-auto mt-8 bg-[#e66c64] shadow-md shadow-[#e66c648a] p-2.5 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300"
          ><a href="https://github.com/valerieyang00/Project-1" target="_blank" rel="noreferrer" ><h1 className="text-white text-center font-semibold">
            GITHUB
          </h1></a>

          </button>
        </div>
      </div>
    </div>
  );


}