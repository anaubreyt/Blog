import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../shared/api/PostApi';
import { PostDetail } from '../../shared/lib/post/PostDetail';
import { GoBackButton } from '../../shared/ui/button/goBack';
import { Loader } from '../../shared/lib/loader/Loader';
import './Post.css';

const Post = () => {
    const { id } = useParams();
  
    const { data: post, isError, isLoading } = useGetPostByIdQuery(id);

  
    if (isLoading) {
        return <Loader />;
    }
    
    if (isError) {
        return <p>Ошибка загрузки поста</p>;
    }
    

    return (
        <div className="post-container">
            {post && <PostDetail post = {post}/>}
            <GoBackButton />
        </div>
  );
};

export { Post };