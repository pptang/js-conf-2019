import PropTypes from 'prop-types';
import React, { Component, createElement } from 'react';
import {
  BlockQuote,
  Code,
  CodePane,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  S,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text
} from 'spectacle';
import styled from 'styled-components';

const WrappedListItem = props => (
  <ListItem style={{ color: '#FFF' }} {...props} />
)

const _Heading = size => {
  const component = ({ children }) => <Heading size={size}>{children}</Heading>;
  component.propTypes = { children: PropTypes.node };
  return component;
};

const _S = type => {
  const component = ({ children }) => <S type={type}>{children}</S>;
  component.propTypes = { children: PropTypes.node };
  return component;
};

const _CombineBlockQuote = ({ children }) => (
  <BlockQuote>
    <Quote>{children}</Quote>
  </BlockQuote>
);

_CombineBlockQuote.propTypes = { children: PropTypes.node };

const _CodePane = ({ children, language }) => (
  <CodePane theme="external" lang="javascript" source={children} />
);

_CodePane.propTypes = { code: PropTypes.string, language: PropTypes.string };

const Paragraph = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 2rem;
  font-weight: 300;
  color: white;
  -webkit-font-smoothing: antialiased;
`;

export default {
  a: Link,
  blockquote: _CombineBlockQuote,
  code: _CodePane,
  del: _S('strikethrough'),
  em: _S('italic'),
  h1: _Heading(1),
  h2: _Heading(2),
  h3: _Heading(3),
  h4: _Heading(4),
  h5: _Heading(5),
  h6: _Heading(6),
  img: Image,
  codespan: Code,
  li: WrappedListItem,
  p: Paragraph,
  strong: _S('bold'),
  ul: List,
  table: Table,
  thead: TableHeader,
  th: TableHeaderItem,
  tbody: TableBody,
  tr: TableRow,
  td: TableItem
};