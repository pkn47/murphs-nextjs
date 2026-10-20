'use client';

import { Col, Container, Row } from 'react-bootstrap';

const LOGO_URL =
  'http://courses.ics.hawaii.edu/ics314f25/morea/ui-frameworks/murphyslogowhite.png';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'St. Patrick’s Day', href: '#' },
  { label: 'To Go Ordering', href: '#' },
];

const socialLinks = [
  { label: 'Instagram', icon: 'bi-instagram', href: '#' },
  { label: 'Facebook', icon: 'bi-facebook', href: '#' },
  { label: 'Twitter', icon: 'bi-twitter', href: '#' },
];

export default function TopMenu() {
  return (
    <header className="menu-bar">
      <Container fluid className="justify-content-center">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <ul className="nav justify-content-start">
              <li className="nav-item">
                <a className="navbar-brand" href="#">
                  <img src={LOGO_URL} alt="Murphy's Bar & Grill" className="brand-logo" />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <ul className="nav justify-content-end">
              {navLinks.map(({ label, href }) => (
                <li key={label} className="nav-item">
                  <a className="nav-link" href={href}>{label}</a>
                </li>
              ))}
              {socialLinks.map(({ label, icon, href }) => (
                <li key={label} className="nav-item">
                  <a className="nav-link" href={href} aria-label={label}>
                    <i className={`bi ${icon}`} />
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
}