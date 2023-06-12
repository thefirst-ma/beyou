/*
 * @Author: xinyue
 * @Date: 2023-04-10 14:55:10
 * @Description: 
 */
import Head from 'next/head';
import Link from 'next/link';
// import styles from '../styles/Home.module.css';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
// import SuperJSON from 'superjson';
// import useSWR from 'swr';
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

// export default function Home({
//   allPostsData
// }:{
//   allPostsData: {
//     date: string
//     title: string
//     id: string
//   }[]
// }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       {/* <section className={`${utilStyles.headingMd}`}>
//         <p>我叫马鑫岳，来自河南禹州的一个乡村，现在是一名初级的前端开发工程师。平常使用<a href=''>CSS3（sass）</a>，<a href=''>javascript（es6）</a>，<a href=''>vue（2/3）</a>，<a href=''>element-ui</a>，<a href=''>webpack（3/4）</a>，<a href=''>node（10/14）</a>，<a href=''>typescript</a></p>
//         <p>My name is Ma Xin Yue. I am now a front-end engineer. I hope you like them</p>
//       </section> */}
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
//         {/* <ul className={`${utilStyles.list}`}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={`${utilStyles.listItem} text-dark-default hover:text-green-400 hover:underline`} key={id}>
//               <Link href={`/posts/${id}`}>{title}</Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul> */}
//         <div className="grid grid-cols-2 gap-4">
//           {allPostsData.map(({ id, date, title }) => (
//             <li
//               className=""
//               key={id}
//             >
//               <div className="aspect-h-0.618">
//                 <Link className='text-lg font-medium px-4' href={`/posts/${id}`}>
//                 {title}
//                 </Link>
//                   <a className="block px-4 py-2 hover:bg-gray-100">
//                     <small className="text-gray-500">
//                       <Date dateString={date} />
//                     </small>
//                   </a>
//               </div>
//             </li>
//           ))}
//         </div>
//       </section>
//     </Layout>
//   )
// }
import { useState } from 'react';

export default function Home({
  allPostsData
}:{
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchResults = allPostsData.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="p-1 text-center">
        <input
          type="text"
          className="w-full max-w-lg px-4 py-2 rounded-lg shadow-md hover:shadow-lg focus:shadow-xl transition-shadow duration-500"
          placeholder="Search posts"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </header>
      <div className='font-bold mt-4 mb-2 list-disc ml-6 text-blue-500 hidden text-3xl'></div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className="grid grid-cols-2 gap-4">
          {searchResults.map(({ id, date, title }) => (
            <li
              className="hover:bg-gray-100 list-none transition-all duration-300 ease-in-out transform hover:rotate-3 hover:-translate-x-2"
              key={id}
            >
              <div className="aspect-h-0.618">
                <Link className='text-lg font-medium px-4' href={`/posts/${id}`}>
                {title}
                </Link>
                  <a className="block px-4 py-2">
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
