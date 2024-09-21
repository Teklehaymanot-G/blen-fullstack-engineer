'use client';

import ButtonComponent from '@/components/ButtonComponent';
import TextAreaComponent from '@/components/TextAreaComponent';
import TextFieldComponent from '@/components/TextFieldComponent';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { addTask } from '../actions';

const AddTaskForm: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!title || !description || !dueDate) {
      alert('All fields are required.');
      return;
    }

    await addTask({ title, description, dueDate });
    router.push('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-4 text-center text-2xl font-semibold text-gray-800">Add New Task</h1>

      <TextFieldComponent
        inputValue={title}
        handleInputChange={(e) => setTitle(e.target.value)}
        label="Title"
        required
      />

      <TextAreaComponent
        inputValue={description}
        handleInputChange={(e) => setDescription(e.target.value)}
        label="Description"
        required
        minRows={3}
      />
      <TextFieldComponent
        inputValue={dueDate}
        handleInputChange={(e) => setDueDate(e.target.value)}
        label="Due Date"
        required
        type="date" // Pass the correct type for date input
      />
      <div className="flex justify-between space-x-4">
        <ButtonComponent
          label="Cancel"
          type="button"
          variant="secondary"
          onClick={() => router.push('/')}
        />
        <ButtonComponent label="Add Task" type="submit" variant="primary" />
      </div>
    </form>
  );
};

export default AddTaskForm;
