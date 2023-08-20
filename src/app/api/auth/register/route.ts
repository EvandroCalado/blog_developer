import { connectToDb } from '../../../../utils/helpers';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '../../../../../prisma';

export const POST = async (req: Request) => {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ message: 'Dados inválidos' }, { status: 422 });
  }

  try {
    await connectToDb();

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: 'Usuário cadastrado com sucesso', ...user },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Erro ao cadastrar usuário', ...error },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};
