import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from '../../redux/reducers/post';
import {
  makeSelectPostsLoading,
  makeSelectPostsError,
  makeSelectPostData
} from '../../redux/selectors';

const Posts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(makeSelectPostsLoading());
  const error = useSelector(makeSelectPostsError());
  const postData = useSelector(makeSelectPostData());

  useEffect(() => dispatch(loadPosts()), []);

  return (
    <div>
      Latest Posts
      {isLoading ? <div>Loading...</div> : (
        error ? (
          <div>Something went wrong.</div>
        ) : (
          <div>Posts</div>

        )
      )}
    </div>
  );
};

export default Posts;