/*
 * @Author: xinyue
 * @Date: 2023-04-12 22:11:47
 * @Description: 
 */
module.exports = {
    darkMode: 'class', // 启用暗夜模式，并通过类名进行切换
    content : [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        // For the best performance and to avoid false positives,
        // be as specific as possible with your content configuration.
    ],
    theme: {
        extend: {
            // 在这里添加暗夜模式下的样式
            colors: {
                'regal-blue': '#243c5a',
            },
            backgroundColor: {
                'dark': '#000000',
                'soft-dark': '#0c1218'
            },
            textColor: {
                'dark': {
                    DEFAULT: '#ffffffde',
                    200: '#ebebeb99',
                    300: '#ebebeb61',
                    400: '#ebebeb2e'
                }
            },
        },
    },
    plugins: [],
}