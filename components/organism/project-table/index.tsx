interface Project {
    project: string;
    description: string;
    createdOn: string;
}

interface ProjectTableProps {
    projects: Project[];
    onEdit: (project: Project) => void;
    onDelete: (project: Project) => void;
}

const ProjectTable: React.FC<ProjectTableProps> = ({ projects, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-secondary">
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 uppercase tracking-wider">
                            No
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 uppercase tracking-wider">
                            Project
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 uppercase tracking-wider">
                            Description
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 uppercase tracking-wider">
                            Created On
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">{index + 1}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">{project.project}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">{project.description}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">{project.createdOn}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">
                                    <div className="flex space-x-2">
                                        <button className="text-xs text-white bg-secondary px-2 py-1 rounded-md">View</button>
                                        <button className="text-xs text-white bg-primary px-2 py-1 rounded-md" onClick={() => onEdit(project)}>Edit</button>
                                        <button className="text-xs text-white bg-red-500 px-2 py-1 rounded-md" onClick={() => onDelete(project)}>Delete</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectTable;
