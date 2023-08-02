/*
 * @Author: xinyue
 * @Date: 2023-06-12 16:35:51
 * @Description: 
 */
/*
 * @Author: xinyue
 * @Date: 2023-06-12 16:25:36
 * @Description: 
 */
// import  {NextResponse} from 'next/server';
// // import { NextResponse } from 'next/dist/server/web';
// import { get } from '@vercel/edge-config';

// export const config = { matcher: '/api/welcome' };

// export async function middleware() {
//   // const greeting = await get('greeting');
//   // // NextResponse.json requires at least Next v13.1 or
//   // // enabling experimental.allowMiddlewareResponseBody in next.config.js
//   // return NextResponse.json(greeting);

//   const greeting = await get('greeting');
//   const response = new Response(JSON.stringify({ greeting }), {
//     headers: { 'Content-Type': 'application/json' },
//   });
//   // return greeting;
//   return NextResponse.from(response).send();
// }

import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/api/welcome' };

export async function middleware() {
  const greeting = await get('greeting');
  const response = new Response(JSON.stringify({ greeting }), {
    headers: { 'Content-Type': 'application/json' },
  });
  return NextResponse.from(response);
}