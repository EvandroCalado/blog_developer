import prisma from '../../../../prisma';
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from '../../../utils/helpers';

const uploadImage = async (file: Blob) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise<UploadApiResponse>(async (resolve, reject) => {
    const buffer = Buffer.from(await file.arrayBuffer());
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'auto',
          folder: 'blog_dev_evandro',
        },
        (error, result) => {
          if (error) {
            console.log(error);
            return reject(error);
          } else if (result) {
            return resolve(result);
          }
        },
      )
      .end(buffer);
  });
};

export const GET = async () => {
  try {
    await connectToDb();

    const blogs = await prisma.blog.findMany();

    return generateSuccessMessage({ blogs }, 200);
  } catch (error) {
    return generateErrorMessage({ error }, 500);
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    const formData = await req.formData();
    const { title, description, location, userId, categoryId } = JSON.parse(
      formData.get('postData') as string,
    );

    if (!title || !description || !location || !userId || !categoryId) {
      return generateErrorMessage({ reason: 'Dados inválidos' }, 422);
    }

    const file = formData.get('image') as Blob | null;

    let uploadedFile: UploadApiResponse | null = null;

    if (file) {
      uploadedFile = await uploadImage(file);
    } else {
      uploadedFile = null;
    }

    await connectToDb();

    const user = await prisma.user.findFirst({ where: { id: userId } });
    const category = await prisma.category.findFirst({
      where: { id: categoryId },
    });

    if (!user || !category) {
      return generateErrorMessage(
        { reason: 'Usuário ou categoria inválidos' },
        401,
      );
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        description,
        location,
        categoryId,
        userId,
        imageUrl: uploadedFile?.url ?? null,
      },
    });

    return generateSuccessMessage({ blog }, 201);
  } catch (error) {
    return generateErrorMessage({ error }, 500);
  } finally {
    await prisma.$disconnect();
  }
};
