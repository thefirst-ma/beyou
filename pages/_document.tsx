/*
 * @Author: xinyue
 * @Date: 2023-04-27 11:04:12
 * @Description: 
 */
import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyDocument(props) {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps};
};

export default MyDocument;
