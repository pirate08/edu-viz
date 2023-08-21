import Head from 'next/head'
import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['100','400','700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return(
    <div className={roboto.className}>
      <Head>
        <title>EduViz India: Education Insights Dashboard</title>
      </Head>
       <Component {...pageProps} />
    </div>
  )
}
