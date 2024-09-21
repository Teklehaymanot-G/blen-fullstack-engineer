// src/app/[id]/components/EditTaskButton.tsx
'use client';

import ButtonComponent from '@/components/ButtonComponent';
import { useRouter } from 'next/navigation';
import { completeTask } from '../actions';

interface CompleteTaskButtonProps {
  taskId: number;
  isCompleted: boolean;
}

const CompleteTaskButton: React.FC<CompleteTaskButtonProps> = ({ taskId, isCompleted }) => {
  const router = useRouter();

  const handleComplete = async () => {
    await completeTask(taskId, !isCompleted);
    router.push(`/${taskId}`);
  };

  return (
    <ButtonComponent
      label={`${isCompleted ? 'Incomplete' : 'Complete'} Task`}
      onClick={handleComplete}
    />
  );
};

export default CompleteTaskButton;
