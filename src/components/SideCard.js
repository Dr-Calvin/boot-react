/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import { Button, Alert, Card } from 'react-bootstrap';
import img from '../img/person.jpeg';

const SideCard = () => (
  <>
    <Alert variant="danger" className="d-none d-lg-block">
      <strong>Account not activated.</strong>
    </Alert>

    <Card>
      <Card.Img width="100%" src={img} alt="banner" />
      <Card.Body>
        <Card.Title className="h3 mb-2 pt-2 font-weight-bold text-secondary">Tim Kane</Card.Title>
        <Card.Subtitle
          className="text-secondary mb-3 font-weight-light text-uppercase"
          style={{ fontSize: '0.8rem' }}
        >
          Web Developer, Lisbon
        </Card.Subtitle>
        <Card.Text className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
          Full-stack web developer learning new hacks one day at a time. Web technology enthusiast.
          Hacking stuffs @TimKaneDev.
        </Card.Text>
        <Button color="success" className="font-weight-bold">
          View Profile
        </Button>
      </Card.Body>
    </Card>
  </>
);

export default SideCard;
