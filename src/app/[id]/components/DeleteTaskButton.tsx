// src/app/[id]/components/DeleteTaskButton.tsx
'use client';

import ButtonComponent from '@/components/ButtonComponent';
import { useRouter } from 'next/navigation';
import { deleteTask } from '../actions';

interface DeleteTaskButtonProps {
  taskId: number;
}

const DeleteTaskButton: React.FC<DeleteTaskButtonProps> = ({ taskId }) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this task?')) {
      await deleteTask(taskId);
      router.push('/');
    }
  };

  return (
    <ButtonComponent label="Delete Task" variant="danger" onClick={handleDelete}>
      Delete Task
    </ButtonComponent>
  );
};

export default DeleteTaskButton;
