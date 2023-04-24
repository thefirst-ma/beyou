/*
 * @Author: xinyue
 * @Date: 2023-04-12 22:32:03
 * @Description: 
 */
import '../styles/globals.css'
import { AppProps } from 'next/app';
export default function App({Component, pageProps} : AppProps) {
    return <Component {...pageProps}></Component>
}