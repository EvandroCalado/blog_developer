import React from 'react';
import type { Preview } from '@storybook/react';
import { Open_Sans } from 'next/font/google';
import '../src/app/globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div className={openSans.className}>
      <Story />
    </div>
  ),
];
