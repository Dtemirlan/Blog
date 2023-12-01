import React, { useState, useEffect } from 'react';
import { useParams, Link,  } from 'react-router-dom';
import { Container, Card,  } from 'react-bootstrap';

interface Post {
    id: string;
    title: string;
    body: string;
    date: string;
}

const PostDetail: React.FC = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const firebaseUrl = `https://dzhaparov-temirlan-js20-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`;

        fetch(firebaseUrl)
            .then(response => response.json())
            .then(data => {
                setPost(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="mt-5">
            <Card>
                <Card.Body>
                    <p>{new Date(post.date).toLocaleString()}</p>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>

                    <Link to={`/posts/${id}/edit`} className="btn btn-primary ml-2">
                        Изменить
                    </Link>

                    <Link to="/" className="btn btn-secondary ml-2">
                        Назад
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default PostDetail;
