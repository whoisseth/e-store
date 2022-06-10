import Head from 'next/head'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> Shopkart </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </>
  )
}
