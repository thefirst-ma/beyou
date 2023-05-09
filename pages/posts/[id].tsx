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
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'
require('highlight.js/styles/github-dark.css');
// require('highlight.js/styles/github.css');
export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string,
    contentMD: string,
    readingTimeMinutes: string,
  }
}) {
  // const html = Prism.highlight(postData.contentHtml, Prism.languages.javascript, 'javascript');
  return <Layout>
    <Head>
        <title className='dark:text-dark'>{`${postData.title}`}</title>
    </Head>
    <article>
        <h1 className={ `${utilStyles.headingXl} dark:text-dark`}>{postData.title}</h1>
        <div className={`${utilStyles.lightText} dark:text-dark text-xs`}>
          <Date dateString={postData.date} /> |
          <span>{postData.readingTimeMinutes}MIN READ</span>
        </div>
        {/* <div className='dark:text-dark' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
        <ReactMarkdown 
        rehypePlugins={[rehypeHighlight]} 
        children={postData.contentMD}></ReactMarkdown>
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


