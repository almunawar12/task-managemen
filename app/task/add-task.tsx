import React from 'react'

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AddTask({ isOpen, onClose }: AddTaskModalProps) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Create Task</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Subject</label>
                        <input type="text" className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Owner</label>
                        <input type="text" className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Start Date</label>
                        <input type="date" className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">End Date</label>
                        <input type="date" className="w-full border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className=" mr-2 bg-primary text-white px-4 py-2 rounded-md">
                            Save
                        </button>
                        <button type="button" onClick={onClose} className="bg-secondary text-white px-4 py-2 rounded-md">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
