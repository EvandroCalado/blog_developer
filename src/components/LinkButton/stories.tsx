import { Meta, StoryFn } from '@storybook/react';
import LinkButton, { LinkButtonProps } from '.';
import { ArrowRight } from '@phosphor-icons/react';

export default {
  title: 'Ui/LinkButton',
  component: LinkButton,
  args: {
    children: 'LinkButton',
    href: '#',
  },
} as Meta;

export const WithoutIcon: StoryFn<LinkButtonProps> = (args) => (
  <LinkButton {...args} />
);

export const Withicon: StoryFn<LinkButtonProps> = (args) => (
  <LinkButton {...args} icon={<ArrowRight />} />
);
