import React from 'react';
import PropTypes from 'prop-types';

import PostTableHeader from '../PostTableHeader';
import PostTableRow from '../PostTableRow';

const PostTable = ({ posts }) => {
  return (
    <div className="post-table">
      <div className="post-table__body">
        <PostTableHeader />
        {Array.isArray(posts) ? (
          posts.map(post => <PostTableRow key={post.id} data={post} />)
        ) : (
          <div className="post-table__body--empty">No posts</div>
        )}
      </div>
    </div>
  );
};

PostTable.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

PostTable.defaultProps = {
  posts: []
};

export default PostTable;
