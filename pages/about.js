import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1 className={styles.title}>About Me</h1>
            <p> Hi I am Valerie. I am a full-stack software engineer</p>

            {/* load an image locally */}
            <Image 
                src='/SF.jpg'
                alt='logo'
                width={900}
                height={300}
            />
            {/* load an image hosted on another domain */}
            <Image 
                src='https://placekitten.com/400/500'
                alt='portfolio cat'
                width={400}
                height={400}
            />
        </div>
    )
} 

var a = [ 'dog', 'cat', 'hen']
a[100] = 'fox'
console.log(a.length)