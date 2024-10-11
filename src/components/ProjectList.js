import React from 'react';

const ProjectList = ({ projects, updateProject, deleteProject }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Project List</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-4">
            <p className="font-semibold">{project.name}</p>
            <p>Due Date: {project.dueDate}</p>
            <p>Status: {project.status}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => updateProject({ ...project, status: 'completed' })}
                className="bg-green-500 text-white py-1 px-2 rounded"
              >
                Mark as Completed
              </button>
              <button
                onClick={() => deleteProject(project.id)}
                className="bg-red-500 text-white py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
