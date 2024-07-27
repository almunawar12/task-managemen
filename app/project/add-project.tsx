import React, { useState } from 'react';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: {project: string; description: string; createdOn: string}) => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose, onAddProject }) => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProject = () => {
    const newProject = {
      project: projectName,
      description: description,
      createdOn: new Date().toISOString().split('T')[0],
    };
    onAddProject(newProject);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Tambah Project</h2>
        <input
          type="text"
          placeholder="Nama Project"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handleAddProject}
          className="bg-primary text-white px-4 py-2 rounded mr-2"
        >
          Tambah
        </button>
        <button
          onClick={onClose}
          className="bg-secondary text-white px-4 py-2 rounded"
        >
          Batal
        </button>
      </div>
    </div>
  );
};

export default AddProjectModal;
