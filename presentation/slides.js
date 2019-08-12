import React from 'react';
import { Heading, Slide, Text } from 'spectacle';
import { MDXProvider } from '@mdx-js/tag'
import components from './components';
import theme from './theme';

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide bgColor="#19181F" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

// DARK LAYOUT

const lightComponents = {
  ...components,
  h2: ({ children }) => <Heading size={2} textColor={theme.screen.colors.secondary}>{children}</Heading>,
  h3: ({ children }) => <Heading size={3} textColor={theme.screen.colors.secondary}>{children}</Heading>,
  h4: ({ children }) => <Heading size={4} textColor={theme.screen.colors.secondary}>{children}</Heading>,
  h5: ({ children }) => <Heading size={5} textColor={theme.screen.colors.secondary}>{children}</Heading>,
  h6: ({ children }) => <Heading size={6} textColor={theme.screen.colors.secondary}>{children}</Heading>,
  p: ({ children }) => {
    const Paragraph = components.p

    return <Paragraph style={{ color: theme.screen.colors.secondary }}>{children}</Paragraph>
  },
}

export const LightSlide = ({ children, ...rest }) => (
  <Slide bgColor="white" {...rest}>
    <MDXProvider components={lightComponents}>{children}</MDXProvider>
  </Slide>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);
