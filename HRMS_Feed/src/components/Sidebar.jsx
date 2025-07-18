// src/components/Sidebar.jsx
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light p-3">
      <h4 className="text-primary mb-4">HRMS</h4>
      <ListGroup variant="flush">
        <ListGroup.Item>Dashboard</ListGroup.Item>
        <ListGroup.Item>Chat</ListGroup.Item>
        <ListGroup.Item>Employees</ListGroup.Item>
        <ListGroup.Item active>Feed</ListGroup.Item>
        <ListGroup.Item>Recognition</ListGroup.Item>
        <ListGroup.Item>Event</ListGroup.Item>
        <ListGroup.Item>Profile</ListGroup.Item>
        <ListGroup.Item>Settings</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
