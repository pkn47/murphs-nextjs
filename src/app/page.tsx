import { Col, Container, Row } from 'react-bootstrap';

function Hero() {
  return (
    <section className="murphys-background">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="hero-text">
              Now accepting reservations for St. Patrick’s Day<br />
              Please call 808-531-0422 for reservations<br />
              St. Patrick’s Day To-Go Orders can be ordered on our website menu.
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default function Home() {
  return <Hero />;
}