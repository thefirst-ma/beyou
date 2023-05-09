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
      <section className={`${utilStyles.headingMd}`}>
        <p>我叫马鑫岳，来自河南禹州的一个乡村，现在是一名初级的前端开发工程师。平常使用<a href=''>CSS3（sass）</a>，<a href=''>javascript（es6）</a>，<a href=''>vue（2/3）</a>，<a href=''>element-ui</a>，<a href=''>webpack（3/4）</a>，<a href=''>node（10/14）</a>，<a href=''>typescript</a></p>
        <p>My name is Ma Xin Yue. I am now a front-end engineer. I hope you like them</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
        {/* <ul className={`${utilStyles.list}`}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={`${utilStyles.listItem} text-dark-default hover:text-green-400 hover:underline`} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}
        <div className="grid grid-cols-2 gap-4">
          {allPostsData.map(({ id, date, title }) => (
            <li
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
              key={id}
            >
              <div className="aspect-w-1 aspect-h-0.618">
                <Link className='text-lg font-medium px-4' href={`/posts/${id}`}>
                {title}
                </Link>
                  <a className="block px-4 py-2 hover:bg-gray-100">
                    <small className="text-gray-500">
                      <Date dateString={date} />
                    </small>
                  </a>
              </div>
            </li>
          ))}
        </div>
      </section>
    </Layout>
  )
}
