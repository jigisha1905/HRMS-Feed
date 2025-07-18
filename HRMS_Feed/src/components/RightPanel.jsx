// src/components/RightPanel.jsx
import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './RightPanel.css';

const RightPanel = () => {
  return (
    <div className="right-panel p-3">
      <Card className="mb-3">
        <Card.Body>
          <h6>New Point Alert!</h6>
          <p>250 💜</p>
          <Button variant="primary" size="sm">Attempt</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <h6>Don’t Miss Out Upcoming Training</h6>
          <p>25 Oct • 8:00 AM - 12:00 PM</p>
          <Button variant="success" size="sm">Register</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h6>Upcoming Events</h6>
          <ListGroup variant="flush">
            <ListGroup.Item>Team Building – 13 Oct</ListGroup.Item>
            <ListGroup.Item>Employee of Month – 30 Oct</ListGroup.Item>
            <ListGroup.Item>Diversity Seminar – 5 Nov</ListGroup.Item>
            <ListGroup.Item>Town Hall – 10 Nov</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightPanel;
