'use client';

import { Col, Container, Row } from 'react-bootstrap';

const hours = [
  { title: 'Lunch', weekdays: '11:00am - 2:30pm' },
  { title: 'Bar', weekdays: 'From 11:00am to closing' },
  { title: 'Dinner', weekdays: '5:00pm - 9:00pm' },
];

export default function BottomMenu() {
  return (
    <footer className="murphys-footer">
      <Container>
        <Row>
          {hours.map(({ title, weekdays }) => (
            <Col key={title} xs={12} md={4}>
              <h5>{title}</h5>
              <hr />
              <p>
                Monday - Friday: {weekdays}<br />
                Saturday - Sunday: Not open
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
}