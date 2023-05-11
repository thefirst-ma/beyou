/*
 * @Author: xinyue
 * @Date: 2023-04-27 15:40:58
 * @Description: 渲染器
 */
import React from 'react';

export const MyLinkRenderer = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500">
    {children}
  </a>
);

export const MyHeadingRenderer = ({ level, children }) => {
  const HeadingComponent = `h${level}`;
  const headingStyles = `text-${7 - level}xl font-bold mt-4 mb-2`;
  return <HeadingComponent className={headingStyles}>{children}</HeadingComponent>;
};

export const MyListRenderer = ({ children }) => <ul className="list-disc ml-6">{children}</ul>;

export const MyCodeRenderer = ({ children }) => (
  <code className="bg-gray-100 text-gray-800 rounded-md p-.5">{children}</code>
);

export const render = {
  a: MyLinkRenderer,
  h1: MyHeadingRenderer,
  h2: MyHeadingRenderer,
  h3: MyHeadingRenderer,
  h4: MyHeadingRenderer,
  ul: MyListRenderer,
  code: MyCodeRenderer,
};

