import React, { useEffect, useState } from 'react'
import { useGetPostsQuery } from "../../shared/api/PostApi";
import { PostListItem } from "../../shared/lib/post/PostListItem";
import { Loader } from '../../shared/lib/loader/Loader'
import InfiniteScroll from './InfiniteScroll'

const Blog = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery();
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => {
        if (error) {
            setErrorMessage('Ошибка загрузки данных');
        }
    }, [error]);

    if (errorMessage) {
        return (
            <div>
                <p>{errorMessage}</p>
            </div>
        );
    }

    if (!posts || isLoading) {
        return <Loader />;

    }

    return (
        <InfiniteScroll
            data={posts}
            renderItem={ (post) => <PostListItem key={post.id} postId={post.id} 
        />}
    />
    )
}

export { Blog }