/*
 * @Author: xinyue
 * @Date: 2023-04-10 14:55:10
 * @Description: 
 */
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout, {siteTitle} from '../components/Layout';
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
import SuperJSON from 'superjson';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // const allPostsData = getServerSideProps();
  return {
    props: {
      allPostsData,
      // allPostsData: SuperJSON.stringify(allPostsData),
    },
  };
}
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        
      </Head>
      <section className={utilStyles.headingMd}>
        <p>hello this is ma xinyue. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
          {/* {allPostsData} */}
          <input type='button'></input>
        </ul>
      </section>
    </Layout>
  )
}
