import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AddPost: React.FC = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const firebaseUrl = 'https://dzhaparov-temirlan-js20-default-rtdb.europe-west1.firebasedatabase.app/posts.json';

        fetch(firebaseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, body, date: new Date().toISOString() }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                navigate('/');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <div>
                        <h2 className="text-center mb-4">Добавление нового поста</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Заголовок</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Введите заголовок"
                                    value={title}
                                    onChange={handleTitleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBody">
                                <Form.Label>Тело поста</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Введите текст поста"
                                    value={body}
                                    onChange={handleBodyChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-3">
                                Создать пост
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AddPost;
