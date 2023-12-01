import React from 'react';

interface PostDetailProps {
    postId: string;
}

const PostDetail: React.FC<PostDetailProps> = ({ postId }) => {
    const handleDelete = () => {
        // Логика удаления поста
        console.log(`Deleting post with ID: ${postId}`);
    };

    return (
        <div>
            <h2>Post Detail</h2>
            {/* Ваш контент поста */}
            <p>Post ID: {postId}</p>

            {/* Кнопка для удаления поста */}
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    );
};

export default PostDetail;
