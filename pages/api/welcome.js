/*
 * @Author: xinyue
 * @Date: 2023-06-12 16:25:36
 * @Description: 
 */
// import { middleware } from '../../middleware';

// export default async function handler(req, res) {
//   const response = await middleware();
//   response.send(req, res);
// }

import { middleware } from '../../middleware';

export default async function handler(req, res) {
  const nextResponse = await middleware();
  await nextResponse.run(req, res);
}
function get (arr, vlaue) {
  let left = arr[0];
  let length = arr.length;
  let right = arr.at(length - 1);
      while(left < right) {
          let middleLength = Math.ceil(length / 2)
          let middle = arr[middleLength]
          if(middle < value) {

          } else if (middle > value) {

          } else if (middle == value) {

          }
      }
}