import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGetPostByIdQuery } from '../../api/PostApi';

const PostListItem = ({ postId }) => {
    const { data: post } = useGetPostByIdQuery(postId);    

    if (!post) {
        return null;
    }

    return (
        <li className='postList'>
            <p>{post.id}</p>
            <div className='truncate-text'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
                
            <Link to = {`/posts/${post.id}`} className="readMore">Просмотр</Link>
        </li>
    );
};

export { PostListItem }