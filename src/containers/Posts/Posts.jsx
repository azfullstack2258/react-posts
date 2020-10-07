import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostTable from '../../components/post/PostTable';
import { loadPosts } from '../../redux/reducers/post';
import {
  makeSelectPostsLoading,
  makeSelectPostsError,
  makeSelectPostData
} from '../../redux/selectors';
import './style.scss';

const Posts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(makeSelectPostsLoading());
  const error = useSelector(makeSelectPostsError());
  const postData = useSelector(makeSelectPostData());

  useEffect(() => dispatch(loadPosts()), []);

  console.log('Post Data', postData);

  return (
    <div className="container">
      <div className="title">Latest Posts</div>
      {isLoading ? <div>Loading...</div> : (
        error ? (
          <div>Something went wrong.</div>
        ) : (
          <PostTable posts={postData} />
        )
      )}
    </div>
  );
};

export default Posts;