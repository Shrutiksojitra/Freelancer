import React, { useState } from 'react';

const ProjectForm = ({ addProject }) => {
  const [project, setProject] = useState({ name: '', dueDate: '', status: 'active' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ ...project, id: Date.now() });
    setProject({ name: '', dueDate: '', status: 'active' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Add New Project</h3>
      <input
        type="text"
        placeholder="Project Name"
        value={project.name}
        onChange={(e) => setProject({ ...project, name: e.target.value })}
        className="border p-2 mb-4 w-full"
      />
      <input
        type="date"
        value={project.dueDate}
        onChange={(e) => setProject({ ...project, dueDate: e.target.value })}
        className="border p-2 mb-4 w-full"
      />
      <select
        value={project.status}
        onChange={(e) => setProject({ ...project, status: e.target.value })}
        className="border p-2 mb-4 w-full"
      >
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
