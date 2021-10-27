import type { NextPage } from 'next';
import Head from 'next/head';
import ChitChat from '../components/ChitChat/ChitChat';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwindcss Learning</title>
        <meta name="description" content="Best CSS Framework ever made!" />
      </Head> 
      <section className="">
        <ChitChat />
      </section>
    </>
  )
}

export default Home
