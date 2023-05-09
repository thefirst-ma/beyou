/*
 * @Author: xinyue
 * @Date: 2023-04-12 22:32:03
 * @Description: 
 */
import '../styles/tailwind.css';
import '../styles/globals.css'
import { AppProps } from 'next/app';
import SiteHeader from '../components/siteHeader'
import { useState, useEffect } from 'react';
export default function App({Component, pageProps} : AppProps) {
    const [isDarkMode, setIsDarkMode] = useState(null);
    
    useEffect(() => {
        const storedIsDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
        setIsDarkMode(storedIsDarkMode === true);
    }, []);
    if (isDarkMode === null) {
        // 还未获取到 isDarkMode 状态，先使用默认样式
        return <div className="light-mode">Loading...</div>;
      }
    const handleDarkModeChange = (newIsDarkMode) => {
        setIsDarkMode(newIsDarkMode);
        localStorage.setItem('isDarkMode', JSON.stringify(newIsDarkMode));
    };
    return (
        <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className='p-4 flex item-center dark:bg-gray-500'>
                <SiteHeader onDarkModeChange={handleDarkModeChange} isDarkMode={isDarkMode}></SiteHeader>
            </div>
            <Component {...pageProps} />
        </div>
    );
    // return <Component {...pageProps}></Component>
}