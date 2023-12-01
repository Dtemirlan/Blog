import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button} from 'react-bootstrap';

interface Post {
    id: string;
    title: string;
    body: string;
    date: string;
}

const EditPost: React.FC = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const firebaseUrl = `https://dzhaparov-temirlan-js20-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`;

        fetch(firebaseUrl)
            .then(response => response.json())
            .then(data => {
                setPost(data);
                setTitle(data.title);
                setBody(data.body);
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }, [id]);

    const handleUpdate = () => {
        const firebaseUrl = `https://dzhaparov-temirlan-js20-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`;

        fetch(firebaseUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                body: body,
                date: post?.date,
            }),
        })
            .then(response => {
                if (response.ok) {
                    navigate(`/posts/${id}`);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleDelete = () => {
        const firebaseUrl = `https://dzhaparov-temirlan-js20-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`;

        fetch(firebaseUrl, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    navigate('/');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Редактирование поста</h2>
            <Form>
                <Form.Group controlId="formTitle">
                    <Form.Label>Заголовок</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите заголовок"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBody">
                    <Form.Label>Тело поста</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Введите текст поста"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleUpdate}>
                    Обновить пост
                </Button>

                <Button variant="danger" onClick={handleDelete} className="ml-2">
                    Удалить пост
                </Button>

                <Link to={`/posts/${id}`} className="btn btn-secondary ml-2">
                    Отмена
                </Link>
            </Form>
        </Container>
    );
}

export default EditPost;
