import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative w-screen overflow-x-hidden font-dmSans">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
