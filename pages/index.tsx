import ReactLogo from 'components/ReactLogo/ReactLogo'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="bg-[#1A2238] flex flex-col h-screen items-center justify-center font-sans">
      <Head>
        <title>Valtech_ React/Next boilerplate</title>
        <meta name="description" content="This is the React/Next boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactLogo />
    </div>
  )
}

export default Home
