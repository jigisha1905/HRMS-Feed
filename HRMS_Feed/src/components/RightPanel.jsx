// src/components/RightPanel.jsx
import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { FaBirthdayCake, FaCalendarAlt, FaUserFriends, FaHeart, FaGift, FaUsers } from 'react-icons/fa';
import './RightPanel.css';

const RightPanel = () => {
  return (
    <div className="right-panel p-3">

      {/* Points Section */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0 fw-semibold"><FaGift className="me-2 text-success" />Your Points</h6>
            <span className="badge bg-primary fs-5 px-3 py-2">1284</span>
          </div>
          <div className="d-flex mt-3">
            <button className="btn btn-sm btn-outline-primary me-2">Send</button>
            <button className="btn btn-sm btn-outline-success">Redeem</button>
          </div>
        </Card.Body>
      </Card>

      {/* Calendar Section */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body>
          <h6 className="text-muted mb-3"><FaCalendarAlt className="me-2" />February</h6>
          <div className="calendar-grid mb-2">
            {['MON 7', 'TUE 8', 'WED 9', 'THU 10', 'FRI 11'].map(day => (
              <div key={day} className="calendar-day">{day}</div>
            ))}
            <div className="calendar-event"><FaBirthdayCake className="me-1 text-danger" />Birthdays</div>
            <div className="calendar-event empty"></div>
            <div className="calendar-event empty"></div>
            <div className="calendar-event empty"></div>
            <div className="calendar-event marked">X</div>
          </div>
          <div className="text-muted small">🎉 Work Anniversary</div>
        </Card.Body>
      </Card>

      {/* Meetings Section */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div>
                <FaUserFriends className="me-2 text-primary" />
                <strong>Weekly Review Meeting</strong>
                <div className="text-muted small">11:00 AM – 12:00 PM</div>
              </div>
              <Badge bg="light" text="dark">+6 attending</Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Client Meeting - RAB</strong>
              <div className="text-muted small">01:00 PM – 02:00 PM</div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Upcoming Events Section */}
      <Card className="shadow-sm border-0">
        <Card.Body>
          <h6><FaCalendarAlt className="me-2 text-warning" />Upcoming Events</h6>
          <ListGroup variant="flush" className="mt-2">
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span>Team Building Workshop</span>
                <small className="text-muted">15 Oct</small>
              </div>
              <small className="text-muted">10:00 AM – 2:00 PM</small>
            </ListGroup.Item>

            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span>Employee of the Month</span>
                <small className="text-muted">20 Oct</small>
              </div>
              <small className="text-muted">3:00 PM – 4:30 PM</small>
            </ListGroup.Item>

            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span>Diversity Seminar</span>
                <small className="text-muted">5 Nov</small>
              </div>
              <small className="text-muted">9:30 AM – 12:00 PM</small>
            </ListGroup.Item>

            <ListGroup.Item className="fw-bold">
              <div className="d-flex justify-content-between">
                <span>Town Hall Meeting</span>
                <small className="text-muted">10 Nov</small>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

    </div>
  );
};

export default RightPanel;
