/*
 * @Author: xinyue
 * @Date: 2023-04-10 14:55:10
 * @Description: 
 */
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
import SuperJSON from 'superjson';
import useSWR from 'swr';
import Date from '../components/date';
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


// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>welcome to my site. have a good day</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
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
        </ul>
      </section>
    </Layout>
  )
}
