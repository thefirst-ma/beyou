/*
 * @Author: xinyue
 * @Date: 2023-04-18 15:13:31
 * @Description: 动态博客渲染
 */
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
// Add this import
import Date from '../../components/date';
// Add this import at the top of the file
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';
// import ReactMarkdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import CodeBlock from '../../components/CodeBlock';
// import Prism from 'prismjs';

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  // const html = Prism.highlight(postData.contentHtml, Prism.languages.javascript, 'javascript');
  return <Layout>
    <Head>
        <title className='dark:text-dark'>{`${postData.title}`}</title>
    </Head>
    <article>
        <h1 className={ `${utilStyles.headingXl} dark:text-dark`}>{postData.title}</h1>
        <div className={`${utilStyles.lightText} dark:text-dark`}>
          <Date dateString={postData.date} />
        </div>
        <div className='dark:text-dark' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {/* <ReactMarkdown components={{ code: CodeBlock }} children={postData.contentHtml} /> */}
      </article>
  </Layout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
      paths,
      fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Add the "await" keyword like this:
    const postData = await getPostData(params?.id as string);
    return {
      props: {
        postData,
      },
    };
}


