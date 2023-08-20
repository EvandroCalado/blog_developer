import { Meta, StoryFn } from '@storybook/react';
import BlogCard, { BlogCardProps } from '.';

const blog = {
  id: '64de0ba4bc4421dffafb367712',
  title: 'NextJs is awesome',
  description:
    '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis cupiditate culpa corporis nulla placeat aliquid? Autem perferendis possimus quasi facere cum fugit, totam ducimus excepturi hic nobis quis, unde animi.</p>',
  imageUrl:
    'http://res.cloudinary.com/dnhsdenji/image/upload/v1692273570/blog_dev_evandro/dazaggeltsjxuofgsopc.jpg',
  userId: '64dcc7683b60e2f50838b332',
  createdAt: '2023-08-17T11:59:32.874Z',
  updatedAt: '2023-08-17T11:59:32.874Z',
  categoryId: '64dd8fb10928bb143a6d046e',
  location: 'Brasil',
};

export default {
  title: 'Ui/BlogCard',
  component: BlogCard,
  args: blog,
} as Meta;

export const Default: StoryFn<BlogCardProps> = (args) => <BlogCard {...args} />;
