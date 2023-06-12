/*
 * @Author: xinyue
 * @Date: 2023-04-27 15:40:58
 * @Description: 渲染器
 */
import React, { ReactNode } from 'react';

export const MyLinkRenderer = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500">
    {children}
  </a>
);
interface MyHeadingRendererProps {
  level: number;
  children: ReactNode;
}
interface MyRenderers {
  [key: string]: React.FC<any>;
}

export const MyHeadingRenderer: React.FC<MyHeadingRendererProps> = ({ level, children }) => {
  const HeadingComponent = `h${level}` as keyof JSX.IntrinsicElements;
  const headingStyles = `text-1xl mt-4 mb-2`;
  return <HeadingComponent className={headingStyles}>{children}</HeadingComponent>;
};

export const MyListRenderer = ({ children }) => <ul className="list-disc ml-6">{children}</ul>;
export const MyLiRenderer = ({ children }) => <li className="mt-2">{children}</li>;
export const MyPRenderer = ({ children }) => <p className="mt-2">{children}</p>;

export const MyCodeRenderer = ({ children, className }) => {
  const codeClassNames =  className ? `${className} mt-2` : "font-bold border-b";
  return <code className={codeClassNames}>{children}</code>
};

export const render: MyRenderers = {
  a: MyLinkRenderer,
  h1: MyHeadingRenderer,
  h2: MyHeadingRenderer,
  h3: MyHeadingRenderer,
  h4: MyHeadingRenderer,
  ul: MyListRenderer,
  code: MyCodeRenderer,
  p: MyPRenderer,
  li: MyLiRenderer
};

