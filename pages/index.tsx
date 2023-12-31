import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import utilStyles from '@/styles/utils.module.scss';
import Link from 'next/link';
import { getSortedPostsData, PostsDataProps } from '../lib/posts';
import Date from '@/components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: { allPostsData: PostsDataProps[]}) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
          <li className={utilStyles.listItem} >
            <Link href={'/mong-page'}>Mongo Crud</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString='2023-09-25 12:00:00' />
            </small>
          </li>
        </ul>
      </section>
    </Layout>
  );
}