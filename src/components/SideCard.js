import React, { Fragment } from 'react';

import {
  Button, Alert, Card
} from 'react-bootstrap';

const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';

const SideCard = () => (
  <Fragment>
  
    <Alert variant="danger" className="d-none d-lg-block">
      <strong>Account not activated.</strong>
    </Alert>
    
    <Card>
      <Card.Img width="100%" src={BANNER} alt="banner" />
      <Card.Body>
        <Card.Title className="h3 mb-2 pt-2 font-weight-bold text-secondary">Glad Chinda</Card.Title>
        <Card.Subtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>Web Developer, Lagos</Card.Subtitle>
        <Card.Text className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Full-stack web developer learning new hacks one day at a time. Web technology enthusiast. Hacking stuffs @theflutterwave.</Card.Text>
        <Button color="success" className="font-weight-bold">View Profile</Button>
      </Card.Body>
    </Card>
    
  </Fragment>
);

export default SideCard;
