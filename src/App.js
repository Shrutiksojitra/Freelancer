import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import PaymentList from './components/PaymentList';
import './App.css';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [payments, setPayments] = useState([
    { id: 1, amount: 500, status: 'unpaid' },
    { id: 2, amount: 300, status: 'paid' }
  ]);

  const addProject = (project) => setProjects([...projects, project]);
  const updateProject = (updatedProject) =>
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );

  const deleteProject = (id) =>
    setProjects(projects.filter((project) => project.id !== id));

  const markAsPaid = (id) =>
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, status: 'paid' } : payment
      )
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Project Dashboard</h1>
      <Dashboard />
      <ProjectForm addProject={addProject} />
      <ProjectList
        projects={projects}
        updateProject={updateProject}
        deleteProject={deleteProject}
      />
      <PaymentList payments={payments} markAsPaid={markAsPaid} />
    </div>
  );
};

export default App;
