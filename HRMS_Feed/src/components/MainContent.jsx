// src/components/MainContent.jsx
import React from 'react';
import './MainContent.css';
import { Card, Button } from 'react-bootstrap';

const MainContent = () => {
  return (
    <div className="main-content p-3">
      <h5 className="mb-3">Feed</h5>

      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <strong>Praheenesh Jahir</strong> <span className="text-muted">APPRECIATED</span><br />
              <span className="text-muted small">To Rakesh Sharma - 04/10/2023</span>
            </div>
          </div>
          <p className="mt-2">🎉 <strong>Congratulations to Rakesh Sharma</strong><br />
            Your performance in IT & Systems has been greatly appreciated!
          </p>
          <Button variant="outline-primary" size="sm" className="me-2">💜 2450</Button>
          <Button variant="link" size="sm">Comment</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <strong>Alka Johnson</strong> <span className="text-muted">APPRECIATED</span><br />
              <span className="text-muted small">To Bob Smith - 07/10/2023</span>
            </div>
          </div>
          <p className="mt-2">🤝 <strong>Stellar Teamwork</strong><br />
            Kudos to Bob for collaboration on the recent project!
          </p>
          <Button variant="outline-primary" size="sm" className="me-2">💜 2450</Button>
          <Button variant="link" size="sm">Comment</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainContent;
