import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Spinner } from 'react-bootstrap';

interface Post {
    id: string;
    title: string;
    body: string;
    date: string;
}

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const firebaseUrl = 'https://dzhaparov-temirlan-js20-default-rtdb.europe-west1.firebasedatabase.app/posts.json';

        fetch(firebaseUrl)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const postsArray = Object.keys(data).map(key => ({
                        id: key,
                        ...data[key],
                    }));
                    setPosts(postsArray);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Container className="mt-5 text-center">
                <Spinner animation="border" role="status" variant="primary">
                </Spinner>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <h2>Список постов</h2>
            {posts.map(post => (
                <Card key={post.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                        <Link to={`/posts/${post.id}`} className="btn btn-primary mr-2">
                            Читать далее
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default Home;
