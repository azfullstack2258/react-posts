import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostTable from '../../components/post/PostTable';
import { LoadingSpinner } from '../../components/_shared';
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

  const handleTryAgain = () => dispatch(loadPosts());

  return (
    <div className="container">
      <div className="title">Latest Posts</div>
      {isLoading ? (
        <div className="loading-container">
          <LoadingSpinner />
        </div>
      ) : (
        error ? (
          <div className="error-box">
            <div className="error-box__title">Something went wrong</div>
            <div className="error-box__text">
              Click <span className="error-box__action" onClick={handleTryAgain}>here</span> to try again.
            </div>
          </div>
        ) : (
          <PostTable posts={postData} />
        )
      )}
    </div>
  );
};

export default Posts;
