import 'styles/globals.css'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className="relative w-screen overflow-x-hidden font-dmSans">
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  )
}

export default MyApp
