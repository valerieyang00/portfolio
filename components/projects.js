import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/Home.module.css'

export default function Projects() {

    return (
        <>
        <div className={styles.workContainer}>

            <div className="flex justify-center" >
                <div className="card lg:card-side bg-base-100 shadow-xl mb-10 " id={styles.projects}>
                    <figure>
                        <Carousel className={styles.carousel} >
                            <div>
                                <img src="/dream1.png" alt="dream1" />


                            </div>
                            <div>
                                <img src="/dream2.png" alt="image2" />


                            </div>
                            <div>
                                <img src="/dream3.png" alt="image3" />


                            </div>
                            <div>
                                <img src="/dream4.png" alt="image4" />


                            </div>
                        </Carousel>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-5">DreamPlanner</h2>
                        <p>Fully-responsive web application developed using Django, React, and PostgreSQL <br></br><br></br>Vacation Planning app with savings estimator tool and dashboards dynamically updated for expense vs budget tracking</p>
                        <div className="card-footer">
                            <p>Tech Used: Django, React, PostgreSQL, TailwindCSS</p>
                            <p>Group Project</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn scale-100 hover:scale-110 ease-in duration-100" style={{ backgroundColor: "#e66c64" }}><a href="https://dreamplanner-vy.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Live</a></button>
                            <button className="btn scale-100 hover:scale-110 ease-in duration-100" style={{ backgroundColor: "#e66c64" }}><a href="https://github.com/valerieyang00/dream-planner-client" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Github</a></button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex justify-center" >
                <div className="card lg:card-side bg-base-100 shadow-xl mb-10" id={styles.projects} >
                    <figure>
                        <Carousel className={styles.carousel2}  >
                            <div>
                                <img src="/weekend1.png" alt="weekend1" />


                            </div>
                            <div>
                                <img src="/weekend2.png" alt="image2" />


                            </div>
                            <div>
                                <img src="/weekend3.png" alt="image3" />


                            </div>
                            <div>
                                <img src="/weekend4.png" alt="image4" />


                            </div>
                            <div>
                                <img src="/weekend5.png" alt="image5" />


                            </div>
                            {/* <div>
                                <img src="/weekend6.png" alt="image4" />


                            </div> */}
                        </Carousel>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-5">ThisWeekend</h2>
                        <p className="mb-3">Full-stack application developed using Node, Express, PostgreSQL.<br></br><br></br>Created an Activity themed application incorporating a web API where users are able to view/save acvities by category, log progress, write reviews, and post & comment on public feeds.</p>
                        <div className="card-footer">
                            <p>Tech Used: Node, Express, PostgreSQL, Sequelize, EJS templates, BootstrapCSS</p>
                            <p>Solo Project</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn scale-100 hover:scale-110 ease-in duration-100" style={{ backgroundColor: "#e66c64" }}><a href="https://thisweekend-valerieyang00.koyeb.app/" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Live</a></button>
                            <button className="btn scale-100 hover:scale-110 ease-in duration-100" style={{ backgroundColor: "#e66c64" }}><a href="https://github.com/valerieyang00/Project-2" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Github</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className={styles.workContainer}>

            <div className="flex justify-center" >
                <div className="card lg:card-side bg-base-100 shadow-xl mb-10" id={styles.projects} >
                    <figure >
                        <Carousel className={styles.carousel3}   >
                            <div>
                                <img src="/pet1.png" alt="pet1" />


                            </div>
                            <div>
                                <img src="/pet2.png" alt="image2" />


                            </div>
                            <div>
                                <img src="/pet3.png" alt="image3" />


                            </div>
                            <div>
                                <img src="/pet4.png" alt="image4" />


                            </div>
                        </Carousel>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-5">PetSpace</h2>
                        <p>Full-Stack application built using MERN <br></br><br></br>Created a photo-upload and social networking application with instagram-like features: follow/unfollow, like/unlike, comments</p>
                        <div className="card-footer">
                            <p>Tech Used: MongoDB, Express, React, Node, Cloudinary, BootstrapCSS</p>
                            <p>Group Project</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn scale-100 hover:scale-110 ease-in duration-100" style={{ backgroundColor: "#e66c64" }}><a href="http://petspace-vy.netlify.app" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Live</a></button>
                            <button className="btn scale-100 hover:scale-110 ease-in duration-100" style={{ backgroundColor: "#e66c64" }}><a href="https://github.com/valerieyang00/petspace-p3-client" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Github</a></button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center" >
                <div className="card lg:card-side bg-base-100 shadow-xl mb-10" id={styles.projects} >
                    <figure >
                        <Carousel className={styles.carousel4}  >
                            <div>
                                <img src="/game1.png" alt="game1" />


                            </div>
                            <div>
                                <img src="/game2.png" alt="image2" />


                            </div>
                            <div>
                                <img src="/game3.png" alt="image3" />


                            </div>

                        </Carousel>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-5">KittyGame</h2>
                        <p>Web game designed and built using HTML Canvas and Javascript <br></br><br></br>First project as a student at General Assembly- Software Engineering Immersive</p>
                        <div className="card-footer">
                            <p>Tech Used: HTML - Canvas, CSS, Javascript</p>
                            <p>Solo Project</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn scale-100 hover:scale-110 ease-in duration-100" style={{ backgroundColor: "#e66c64" }}><a href="https://valerieyang00.github.io/Project-1/" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Live</a></button>
                            <button className="btn scale-100 hover:scale-110 ease-in duration-100" style={{ backgroundColor: "#e66c64" }}><a href="https://github.com/valerieyang00/Project-1" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Github</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        </>

    )
}