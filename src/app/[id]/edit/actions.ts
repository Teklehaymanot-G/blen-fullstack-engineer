// src/app/[id]/edit/actions.ts
'use server';

import { eq } from 'drizzle-orm';
import { db } from '../../../db/client';
import { tasks } from '../../../db/schema';

interface UpdateTaskData {
  title: string;
  description: string;
  dueDate: string;
}

export async function updateTask(taskId: number, data: UpdateTaskData) {
  const { title, description, dueDate } = data;

  // Basic validation
  if (!title || !description || !dueDate) {
    throw new Error('All fields are required.');
  }

  await db
    .update(tasks)
    .set({
      title,
      description,
      dueDate: new Date(dueDate).toISOString(),
      updatedAt: new Date().toISOString(),
    })
    .where(eq(tasks.id, taskId));
}
