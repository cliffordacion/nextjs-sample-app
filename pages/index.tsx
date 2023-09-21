import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I&apos;m Cliff!</p>
        <p>
          This is a test website
          Dunno what happens
        </p>
        <Link href="/post/first-post">this page!</Link>
      </section>
    </Layout>
  );
}