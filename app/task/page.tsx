'use client'
import ProjectSearch from '@/components/molecules/project-search'
import TaskSearch from '@/components/molecules/task-search'
import Header from '@/components/organism/header'
import SideBar from '@/components/organism/sidebar'
import TaskTable from '@/components/organism/task-table'
import React, { useState } from 'react'
import AddTask from './add-task'

export default function Task() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex flex-grow flex-col">
          <Header />
          <div className="p-8 flex-grow max-h-full overflow-auto">
            <div>
              <h1 className="text-2xl font-bold mb-4">Task List</h1>
              <TaskSearch />
            </div>
            <div
              className="mt-3 p-2 w-44 rounded-md text-white text-center font-semibold bg-primary hover:bg-secondary cursor-pointer"
              onClick={openModal}
            >
              Create Task
            </div>
            <div className='mt-3'>
              <TaskTable />
            </div>
          </div>
        </div>
      </div>
      <AddTask isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
