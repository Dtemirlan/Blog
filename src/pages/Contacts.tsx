import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
    return (
        <Container className="mt-5">
            <h2>Контакты</h2>
            <Row>
                <Col lg={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Свяжитесь с нами</Card.Title>
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Label>Ваше Имя</Form.Label>
                                    <Form.Control type="text" placeholder="Введите ваше имя" />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email адрес</Form.Label>
                                    <Form.Control type="email" placeholder="Введите ваш email" />
                                </Form.Group>

                                <Form.Group controlId="formMessage">
                                    <Form.Label>Ваше Сообщение</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Напишите ваше сообщение" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Отправить сообщение
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Как нас найти</Card.Title>
                            <Card.Text>
                                Адрес: Улица, Город, Страна
                            </Card.Text>
                            <Card.Text>
                                Телефон: +996 (XXX) XXX-XXXX
                            </Card.Text>
                            <Card.Text>
                                Email: info@example.com
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Социальные сети</Card.Title>
                            <Card.Text>
                                Мы также активны в социальных сетях. Подписывайтесь на нас!
                            </Card.Text>
                            {/* Добавьте ссылки на социальные сети */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
