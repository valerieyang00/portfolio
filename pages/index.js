import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className= "bg-gradient-to-r from-orange-50 to-orange-200">

    <div className={styles.container}>
      <Head>
        <title>Valerie Yang | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
        @import url({"https://fonts.googleapis.com/css2?family=Meddon&display=swap"});
        @import url({"https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&display=swap"});
        </style>

      </Head>

      <main className={styles.main} id="contact">
        <h1 className={styles.name}><span id={styles.vlogo}>V</span>Valerie Yang</h1>
        <h1 className={styles.job}>
          Software Engineer
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
      <main className={styles.main} id="about">
        <h1 className={styles.title}>
          About Me
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

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
      <main className={styles.main} id="works">
        <h1 className={styles.title}>
          Works
        </h1>


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
