'use client'
import React, { useEffect, useState } from 'react'

interface Task {
    no: number;
    subject: string;
    owner: string;
    status: string;
    startDate: string;
    endDate: string;
  }
  
  interface EditTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    task: Task | null;
    onSave: (updatedTask: Task) => void;
  }

export default function EditTask( { isOpen, onClose, task, onSave }: EditTaskModalProps) {

    const [editedTask, setEditedTask] = useState<Task | null>(task);

    useEffect(() => {
      setEditedTask(task);
    }, [task]);
  
    if (!isOpen || !editedTask) return null;
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setEditedTask({ ...editedTask, [name]: value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave(editedTask);
      onClose();
    };
  

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={editedTask.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Owner</label>
              <input
                type="text"
                name="owner"
                value={editedTask.owner}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Status</label>
              <select
                name="status"
                value={editedTask.status}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={editedTask.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                value={editedTask.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="mr-2 bg-primary text-white px-4 py-2 rounded-md">
                Save
              </button>
              <button type="button" onClick={onClose} className="bg-secondary text-white px-4 py-2 rounded-md" >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}
