import Image from 'next/image';
import LinkButton from '../LinkButton';
import { ArrowRight } from '@phosphor-icons/react';

export type BlogCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  location: string;
};

const BlogCard = (blog: BlogCardProps) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow dark:border-zinc-700 dark:bg-zinc-800">
      <Image
        src={
          blog.imageUrl ??
          'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png'
        }
        alt="Blog"
        width={400}
        height={100}
        className="h-48 rounded-sm"
      />
      <div className="p-5">
        <h5 className="mb-2 line-clamp-1 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {blog.title}
        </h5>
        <div
          className="mb-3 line-clamp-3 font-normal text-zinc-700 dark:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
        <LinkButton href="#" icon={<ArrowRight />}>
          Ler mais
        </LinkButton>
      </div>
    </div>
  );
};

export default BlogCard;
