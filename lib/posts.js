/*
 * @Author: xinyue
 * @Date: 2023-04-17 16:54:33
 * @Description: 
 * Parse each markdown file and get title, date, and file name 
 * (which will be used as id for the post URL)
 * 
 * List the data on the index page, sorted by date
 */
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter'

// fetches data from the file system
const postsDirectory = path.join(process.cwd(), 'posts')
export function getSortedPostsData () {
    // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
// import { Configuration, OpenAIApi } from "openai";
// import KEYS from './keys';
// const configuration = new Configuration({
//     apiKey: KEYS.OpenAiKEY,
// });

// export async function getServerSideProps () {
//   // const openai = new OpenAIApi(configuration);
//   // const res = await openai.listEngines();
//   // const res = await fetch('https://dog.ceo/api/breeds/image/random')
//   // const res = await fetch('https://urlhaus-api.abuse.ch/v1/urls/recent/')
//   // console.log('----------',res);
//   // return res
// }
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}