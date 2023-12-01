import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const About: React.FC = () => {
    return (
        <Container className="mt-5">
            <h2>О нас</h2>
            <Row>
                <Col lg={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Наша Миссия</Card.Title>
                            <Card.Text>
                                'Интересные истории' создана для того, чтобы делиться историями, вдохновляющими моментами и полезными знаниями.
                                Мы стремимся создавать контент, который будет интересен каждому читателю.
                                Присоединяйся в увлекательное путешестве по миру знаний, историй успеха и уникальных переживаний!
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Наша Команда</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>BKaprice</ListGroup.Item>
                                <ListGroup.Item>User223</ListGroup.Item>
                                <ListGroup.Item>ITboss</ListGroup.Item>

                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Обратная Связь Читателей</Card.Title>
                            <Card.Text>
                                "Спасибо за ваш удивительный блог! Он всегда вдохновляет на новые идеи и помогает расширить свой кругозор."
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Наши Планы</Card.Title>
                            <Card.Text>
                                Мы планируем расширить тематику статей, внедрить новые функции на сайте и провести специальные мероприятия для наших читателей.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
