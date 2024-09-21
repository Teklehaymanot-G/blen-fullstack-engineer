// src/app/components/AddTaskButton.tsx
'use client';

import { useRouter } from 'next/navigation';

const AddTaskButton: React.FC = () => {
  const router = useRouter();

  const handleAddTask = () => {
    router.push('/add');
  };

  // return (
  //   <Button onClick={handleAddTask} className="mb-4">
  //     Add New Task
  //   </Button>
  // );
  return (
    <button onClick={handleAddTask} className="mb-4">
      Add New Task
    </button>
  );
};

export default AddTaskButton;
