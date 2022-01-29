import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Stuff for my RaspberryPi setup!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header title='RPi' />
        <p>
          <h2>PiHole stuff</h2>
          <ul>
            <Link href='/hole/adlists'>
              <li>Aggregate Adlists</li>
            </Link>
            <Link href='/hole/whitelists'>
              <li>Exact Whitelist</li>
            </Link>
            <Link href='/hole/regex_bl'>
              <li>REGEX Blacklist</li>
            </Link>
            <Link href='/hole/regex_wl'>
              <li>REGEX Whitelist</li>
            </Link>
          </ul>
        </p>
      </main>

      <Footer />
    </div>
  );
}
