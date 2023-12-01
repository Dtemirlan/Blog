import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSendMessage = async (event: React.FormEvent) => {
        event.preventDefault();

        // Здесь вам нужно добавить логику отправки данных на сервер
        // Используйте вашу функцию для отправки данных в API

        console.log('Sending message:', formData);
        // Пример: await sendMessageToAPI(formData);
    };

    return (
        <Container className="mt-5">
            <h2>Контакты</h2>
            <Row>
                <Col lg={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Свяжитесь с нами</Card.Title>
                            <Form onSubmit={handleSendMessage}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Ваше Имя</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введите ваше имя"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email адрес</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Введите ваш email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formMessage">
                                    <Form.Label>Ваше Сообщение</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Напишите ваше сообщение"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
