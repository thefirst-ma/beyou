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
import { GetStaticProps } from 'next'
export const getStaticProps: GetStaticProps = async () => {
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

export default function Home({
  allPostsData
}:{
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} dark:text-dark`}>

        <p>My name is Ma Xin Yue. I am now a front-end engineer. I will show you some personal blogs. I hope you like them</p>
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
