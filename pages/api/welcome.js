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