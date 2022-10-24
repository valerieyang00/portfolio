// import built-in link from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href='#contact'>Contact</Link>{' | '}
            <Link href='#about'>About</Link>{' | '}
            <Link href='#works'>Works</Link>
        </nav>
    )
}