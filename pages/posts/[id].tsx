import Layout from '@/components/layout';
import { getAllPostIds, getPostData, GetPostDataProps } from '@/lib/posts';
import Head from 'next/head';
import Date from '@/components/date';
import utilStyles from '@/styles/utils.module.scss';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

interface postPagePops {
  id: string;
}

export async function getStaticProps({ params }: {params: postPagePops}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: {postData: GetPostDataProps}) {
  return(
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
  </Layout>
  );
}