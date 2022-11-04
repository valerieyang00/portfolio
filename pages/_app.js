import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Navbar from '../components/navbar'


function MyApp({ Component, pageProps }) {

  return (
    <>
    {/* header */}
    <Navbar />
    {/* aside... */}
    <Component {...pageProps} />
    {/* footer */}
    </>
  )
}

export default MyApp
