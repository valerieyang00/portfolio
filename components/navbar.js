// import built-in link from next
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Navbar() {
    return (
        <nav className="flex justify-between sticky top-0 z-50 bg-gradient-to-r from-slate-700 to-slate-900">
            <div className="mt-5 ml-10">
            <Link href='#contact'><h1 className={styles.nameNav}><span id={styles.vlogoNav}>V</span>Valerie Yang</h1></Link>
            </div>
            <div>
            <Link href='#contact'>Contact</Link>{' | '}
            <Link href='#about'>About</Link>{' | '}
            <Link href='#works'>Works</Link>
            </div>
        </nav>
    )
}