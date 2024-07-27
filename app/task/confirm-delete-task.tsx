import React from 'react'

interface ConfirmationModalProps {
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmDeleteTask( { isOpen, message, onConfirm, onCancel }: ConfirmationModalProps) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">{message}</h2>
            <div className="flex justify-end space-x-2">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={onConfirm}
                >
                    Yakin
                </button>
                <button
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                    onClick={onCancel}
                >
                    Batal
                </button>
            </div>
        </div>
    </div>
  )
}
