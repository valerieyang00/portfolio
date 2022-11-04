import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contact from '../components/contact'
import Skills from '../components/skills'

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
          <h1 className="text-6xl font-semibold text-gray-500">
            Works
          </h1>
          <div className="text-3xl font-semibold text-gray-400">I am learning everyday! <p>Please check out some of my work below</p></div>


          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <main className={styles.main} id="contact">
          <h1 className={styles.job}>
            Contact Me:
          </h1>
          <div className={styles.grid}>
            <a href="https://github.com/valerieyang00" target="_blank" rel="noopener noreferrer" className={styles.card}>
              <h2>Github</h2>
              <Image
                src='/github.png'
                alt='github link'
                width={200}
                height={200}
              />
            </a>

            <a href="https://linkedin.com/in/valeriey" target="_blank" rel="noopener noreferrer" className={styles.card}>
              <h2>LinkedIn</h2>
              <Image
                src='/linkedin.png'
                alt='linkedin link'
                width={200}
                height={200}
              />
            </a>

            <a
              href="mailto:valerieyang00@gmail.com"
              className={styles.card}
            >
              <h2>Email</h2>
              <Image
                src='/email.png'
                alt='email link'
                width={200}
                height={200}
              />
            </a>

            <a
              href="https://drive.google.com/file/d/1gb1nHgQNS0jSGTHBx8JAFGkjplmVWYEM/view?usp=sharing" target="_blank" rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>Resume</h2>
              <Image
                src='/resume2.png'
                alt='resume link'
                width={200}
                height={200}
              />
            </a>
          </div>
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
