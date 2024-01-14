'use server';

import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { getResourceFromTitle, getUser } from './data';
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

  try {
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
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Resource',
    };
  }
  redirect(`/view-resources/`);
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

  try {
    const updateResource = await prisma.resource.update({
      where: {
        id,
      },
      data: { name, category, status, link, notes },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed To Update Resource',
    };
  }
  redirect(`/view-resources/${id}`);
}

// Delete an existing resource + related study logs
export async function deleteResource(id: number) {
  try {
    await prisma.studyLog.deleteMany({
      where: { resourceId: id },
    });
    await prisma.resource.delete({
      where: { id },
    });
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Resource' };
  }

  redirect(`/view-resources/`);
}

// Create a new study log

const StudyLogFormSchema = z.object({
  id: z.string(),
  title: z.string(),
  time: z.number(),
  category: z.enum(['Listening', 'Reading', 'Watching', 'Speaking', 'Playing']),
  date: z.date(),
  resource: z.string(),
});

const CreateStudyLog = StudyLogFormSchema.omit({ id: true, user: true });

export async function createStudyLog(formData: FormData) {
  console.log('creating stuyg log')
  const session = await auth();
  if (!session?.user?.email) {
    return null;
  }
  const user = await getUser(session.user.email);
  if (!user) {
    return null;
  }

  const { title, time, category, date, resource } = CreateStudyLog.parse({
    title: formData.get('title'),
    time: formData.get('time'),
    category: formData.get('category'),
    date: formData.get('date'),
    resource: formData.get('resource'),
  });

  const resourceEntry = await getResourceFromTitle(resource);
  if (!resourceEntry) {
    return null;
  }

  try {
    const newStudyLog = await prisma.studyLog.create({
      data: {
        title,
        time,
        category,
        date,
        user: { connect: { id: user.id } },
        resource: { connect: { id: resourceEntry.id } },
      },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Study Log',
    };
  }
  redirect(`/view-logs`);
}
