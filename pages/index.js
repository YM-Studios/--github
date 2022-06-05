import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>노는방 홈페이지</title>
        <link rel="icon" href="https://cdn.discordapp.com/icons/955415810057338890/921ee594dfdbf19530ca5c0fcc9738d2.webp?size=128" />
      </Head>

      <main>
        <Header title="노는방 홈페이지" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
