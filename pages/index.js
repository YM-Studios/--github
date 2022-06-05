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
          디스코드 역사상 제일 재미있는 노는방 디스코드. <code>\n</code> <code>https://discord.gg/4wwrEf5uRV</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
