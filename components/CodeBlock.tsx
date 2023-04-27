/*
 * @Author: xinyue
 * @Date: 2023-04-27 15:40:58
 * @Description: 
 */
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={darcula}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
