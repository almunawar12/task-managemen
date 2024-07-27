import ConfirmDeleteTask from '@/app/task/confirm-delete-task';
import EditTask from '@/app/task/edit-task';
import React, { useState } from 'react'

const tasks = [
  {
    no: 1,
    subject: 'Story Board Video Konten',
    owner: 'Sania',
    status: 'In Progress',
    startDate: '25/07/2024',
    endDate: '27/07/2024',
  },
  {
    no: 2,
    subject: 'Review Design',
    owner: 'Rani',
    status: 'Completed',
    startDate: '20/07/2024',
    endDate: '22/07/2024',
  },
];

export default function TaskTable() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const openEditModal = (task: Task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedTask(null);
    setIsEditModalOpen(false);
  };

  const handleSave = (updatedTask: Task) => {
    const updatedTasks = taskList.map(task => 
      task.no === updatedTask.no ? updatedTask : task
    );
    setTaskList(updatedTasks);
  };

  const openConfirmModal = (task: Task) => {
    setSelectedTask(task);
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setSelectedTask(null);
    setIsConfirmModalOpen(false);
  };

  const handleDelete = () => {
    if (selectedTask) {
      const updatedTasks = taskList.filter(task => task.no !== selectedTask.no);
      setTaskList(updatedTasks);
      closeConfirmModal();
    }
  };
  

  return (
    <div className="p-4">
      <div className="mb-4">
        <ul className="flex space-x-4">
          <li className="border-b-2 border-secondary font-bold">All Tasks</li>
          <li className="text-blue-500 cursor-pointer">In progress</li>
          <li className="text-blue-500 cursor-pointer">Completed</li>
        </ul>
      </div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-secondary">
            <th className="border border-gray-300 p-2">No</th>
            <th className="border border-gray-300 p-2">Subject</th>
            <th className="border border-gray-300 p-2">Owner</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Start Date</th>
            <th className="border border-gray-300 p-2">End Date</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.no}>
              <td className="border border-gray-300 p-2">{task.no}</td>
              <td className="border border-gray-300 p-2">{task.subject}</td>
              <td className="border border-gray-300 p-2">{task.owner}</td>
              <td
                className={`border border-gray-300 p-2 ${
                  task.status === 'Completed' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {task.status}
              </td>
              <td className="border border-gray-300 p-2">{task.startDate}</td>
              <td className="border border-gray-300 p-2">{task.endDate}</td>
              <td className="border border-gray-300 p-2 text-blue-500 cursor-pointer">
              <button className="text-xs text-white bg-secondary px-2 py-1 rounded-md">View</button>
              <button
                  className="text-xs text-white ml-2 bg-primary px-2 py-1 rounded-md"
                  onClick={() => openEditModal(task)}
                >
                  Edit
                </button>
                <button
                  className="text-xs text-white ml-2 bg-red-500 px-2 py-1 rounded-md"
                  onClick={() => openConfirmModal(task)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditTask
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        task={selectedTask}
        onSave={handleSave}
      />
      <ConfirmDeleteTask
        isOpen={isConfirmModalOpen}
        message="Are you sure you want to delete this task?"
        onConfirm={handleDelete}
        onCancel={closeConfirmModal}
      />
    </div>
  )
}
