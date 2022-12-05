
import Project2 from "./project2";
import Project1 from "./project1";
import Project3 from "./project3";
import Project4 from "./project4";


export default function Projects() {

    return (
 <div>
            <div>
                <Project4 />
            </div>
            <div className="mt-5">
                <Project2 />
            </div>
            <div className="mt-5">
                <Project3 />
            </div>
            <div className="mt-5">
                <Project1 />
            </div>
        </div>


    )
}


