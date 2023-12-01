import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // Получение данных о посте по id

    return (
        <div>
            <h2>Заголовок поста</h2>
            <p>Дата создания: Дата поста</p>
            <p>Тело поста</p>
            <Link to={`/posts/${id}/edit`}>Редактировать</Link>
            <button onClick={() => handleDelete(idid)}>Удалить</button>
        </div>
    );
};

export default PostDetail;
