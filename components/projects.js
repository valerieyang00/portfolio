import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

export default function Projects() {    

    return (
        <>
    
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
        <Carousel>
            <div>
                <img src="/dream1.png" alt="dream1" />
                <p className="legend">Main</p>
  
                  </div>
                  <div>
                      <img src="/dream2.png" alt="image2" />
                      <p className="legend">Details</p>
  
                  </div>
                  <div>
                      <img src="/dream3.png" alt="image3"/>
                      <p className="legend">Hotels</p>
  
                  </div>
                  <div>
                      <img src="/dream4.png" alt="image4"/>
                      <p className="legend">DarkMode</p>
  
                  </div>
            </Carousel>
            </figure>
            <div className="card-body">
                <h2 className="card-title">DreamPlanner</h2>
                <p>Vacation Planning app with savings estimator tool and dashboards dynamically updated for expense vs budget tracking</p>
                <p>Fully-responsive web application developed using Django, React, and PostgreSQL</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Live</button>
                    <button className="btn btn-primary">Github</button>
                </div>
            </div>
        </div>
        </>


    )
}