// import built-in link from next
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Navbar() {
    return (
        <nav className="flex justify-end sticky top-0 z-50 bg-gradient-to-r from-slate-700 to-slate-900">
            <div id={styles.navItems}>
            <Link href='#homepage'>Main</Link>{' | '}
            <Link href='#about'>About</Link>{' | '}
            <Link href='#works'>Skills & Works</Link>{'  '}
            </div>
        </nav>
    )
}