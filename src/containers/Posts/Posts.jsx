import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadPosts } from '../../redux/reducers/post';

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadPosts()), []);

  return (
    <div>Posts</div>
  );
};

export default Posts;