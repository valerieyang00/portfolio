import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contact from '../components/contact'
import Skills from '../components/skills'
import Projects from '../components/projects'
import 'tailwindcss/tailwind.css'



export default function Home() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-200">

      <div className={styles.container}>
        <Head>
          <title>Valerie Yang | Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <style>
            @import url({"https://fonts.googleapis.com/css2?family=Meddon&display=swap"});
            @import url({"https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed&display=swap"});
          </style>

        </Head>

        <main className={styles.main} id="homepage">
          <h1 className={styles.name}><p id={styles.vlogo} style={{ fontSize: "150px", textAlign: "center" }}>V</p>Valerie Yang</h1>
          <h1 className={styles.job}>
            Software Engineer
          </h1>
          <Contact />


        </main>
        <main className={styles.main} id="about">

          <div className="py-16 bg-transparent">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                  <Image className="w-100 h-100 rounded-full"
                    src="/head.png"
                    alt="photo"
                    width={500}
                    height={500}
                  />
                  <div className="md:12/12 lg:w-10/12 mt-5">
                    <h1 className="font-semibold text-2xl text-gray-500 text-center">
                      Valerie Yang </h1>
                      <div className="text-xl font-semibold text-gray-400 text-center mb-2"> Full-Stack Software Engineer</div> 
                    <Contact />
                  </div>
                </div>
                <div className="md:7/12 lg:w-6/12">
                  <div className="text-4xl font-mono font-semibold text-gray-400 mb-10">About Me</div>
                  <p className="mt-4 text-gray-600 text-xl"> My passion as a developer grows everyday as I continue on my life-long journey of learning. I would like to take part and contribute in building something that adds value to broad consumers or users. </p>
                  <p className="mt-6 text-gray-600 text-xl">In my 8 years of professional experience, I enjoyed solving problems and the growing technical aspects to my job as finance was being more and more modernized. I am a hard-working professional who has attention to detail, capability to work with different teams and people, and the mindset to develop scalable processes. I hope to bring my experiences, problem-solving skills, and positive energy to the beginning of my new career.</p>

                  <p className="mt-4 text-gray-600 text-xl"> Besides work, I am a cat mom who loves to do cat things with cats 😸</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="mb-2 font-mono font-semibold text-3xl text-gray-400">
            Skills</h1>
            <Skills />


        </main>

        <main className={styles.main} id="works">
          <h1 className="text-4xl font-mono font-semibold text-gray-400">
            Works
          </h1>
          <div className="text-2xl font-semibold text-gray-400 text-center">I am learning everyday!</div>
          <Projects />

        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </div>


  )
}
