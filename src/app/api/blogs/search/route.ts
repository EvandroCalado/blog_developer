import prisma from '../../../../../prisma';
import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from '../../../../utils/helpers';

export const GET = async (req: Request) => {
  const searchTitle = new URL(req.url).searchParams.get('title');

  try {
    await connectToDb();

    const blogs = await prisma.blog.findMany({
      where: { title: { contains: searchTitle ?? '' } },
    });

    return generateSuccessMessage({ blogs }, 200);
  } catch (error) {
    return generateErrorMessage({ error }, 500);
  } finally {
    await prisma.$disconnect();
  }
};
