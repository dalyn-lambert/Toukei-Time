'use server';

import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { getUser } from './data';
import prisma from './prisma';

// authenticate user

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

// Create a new resource

const ResourceFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(['Listening', 'Reading', 'Watching', 'Speaking', 'Playing']),
  status: z.enum(['Current', 'Completed', 'Planned', 'OnHold', 'Dropped']),
  link: z.string().nullish(),
  notes: z.string().nullish(),
});

const CreateResource = ResourceFormSchema.omit({ id: true, user: true });

export async function createResource(formData: FormData) {
  const session = await auth();
  if (!session?.user?.email) {
    return null;
  }
  const user = await getUser(session.user.email);
  if (!user) {
    return null;
  }

  const { name, category, status, link, notes } = CreateResource.parse({
    name: formData.get('name'),
    category: formData.get('category'),
    status: formData.get('status'),
    link: formData.get('link'),
    notes: formData.get('notes'),
  });

  const newResource = await prisma.resource.create({
    data: {
      name,
      category,
      status,
      link,
      notes,
      user: { connect: { id: user.id } },
    },
  });

  redirect(`/view-resources/${newResource.id}`);
}

// Update an existing resource

const UpdateResource = ResourceFormSchema.omit({ id: true, user: true });

export async function updateResource(id: number, formData: FormData) {
  const { name, category, status, link, notes } = UpdateResource.parse({
    name: formData.get('name'),
    category: formData.get('category'),
    status: formData.get('status'),
    link: formData.get('link'),
    notes: formData.get('notes'),
  });

  const updateResource = await prisma.resource.update({
    where: {
      id,
    },
    data: { name, category, status, link, notes },
  });

  redirect(`/view-resources/${updateResource.id}`);
}

// Delete an existing resource
export async function deleteResource(id: number) {
  await prisma.resource.delete({
    where: { id },
  });

  redirect(`/view-resources/`);
}
