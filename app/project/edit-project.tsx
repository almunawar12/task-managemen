// components/organism/EditProject.tsx
import React, { useState, useEffect } from 'react';

interface EditProjectProps {
  isOpen: boolean;
  project: { project: string; description: string; createdOn: string } | null;
  onClose: () => void;
  onEditProject: (editedProject: { project: string; description: string; createdOn: string }) => void;
}

const EditProject: React.FC<EditProjectProps> = ({ isOpen, project, onClose, onEditProject }) => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (project) {
      setProjectName(project.project);
      setDescription(project.description);
    }
  }, [project]);

  const handleEditProject = () => {
    if (project) {
      const editedProject = {
        ...project,
        project: projectName,
        description: description,
      };
      onEditProject(editedProject);
      onClose();
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Project</h2>
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
          onClick={handleEditProject}
          className="bg-primary text-white px-4 py-2 rounded mr-2"
        >
          Simpan
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

export default EditProject;
