'use client'
import ProjectSearch from '@/components/molecules/project-search'
import Header from '@/components/organism/header'
import ProjectTable from '@/components/organism/project-table';
import SideBar from '@/components/organism/sidebar'
import React, { useState } from 'react'
import AddProjectModal from './add-project';
import EditProject from './edit-project';
import ConfirmDelete from './confirm-delete';

export default function Project() {
  const [projects, setProjects] = useState([
    { project: 'Project A', description: 'Completed', createdOn: '2024-01-01' },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAddProject = (newProject: any) => {
    setProjects([...projects, newProject]);
  };

  const handleEditProject = (editedProject: any) => {
    setProjects(projects.map(project => project.project === editedProject.project ? editedProject : project));
  };

  const handleOpenEditModal = (project: any) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const handleOpenConfirmationModal = (projectToDelete: any) => {
    setSelectedProject(projectToDelete);
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedProject) {
      setProjects(projects.filter(project => project.project !== selectedProject.project));
    }
    setIsConfirmationModalOpen(false);
    setSelectedProject(null);
  };

  const handleCancelDelete = () => {
    setIsConfirmationModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex flex-grow flex-col">
          <Header />
          <div className="p-8 flex-grow max-h-full overflow-auto">
            <div>
              <h1 className="text-2xl font-bold mb-4">List projek</h1>
              <ProjectSearch />
            </div>
            <div
              className="mt-3 p-2 w-44 rounded-md text-white text-center font-semibold bg-primary hover:bg-secondary cursor-pointer"
              onClick={() => setIsAddModalOpen(true)}
            >
              Tambah Project
            </div>
            <div className='mt-3'>
              <ProjectTable projects={projects} onEdit={handleOpenEditModal} onDelete={handleOpenConfirmationModal} />
            </div>
          </div>
        </div>
      </div>
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProject={handleAddProject}
      />
      <EditProject
        isOpen={isEditModalOpen}
        project={selectedProject}
        onClose={() => setIsEditModalOpen(false)}
        onEditProject={handleEditProject}
      />
      <ConfirmDelete
        isOpen={isConfirmationModalOpen}
        message={`Anda yakin ingin menghapus "${selectedProject?.project}"?`}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  )
}
