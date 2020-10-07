import React from 'react';

import { COLUMNS } from './constants';
import './style.scss';

const PostTableHeader = () => (
  <div className="post-table__header">
    {COLUMNS.map(({ key, label }) => (
      <div key={key} className={`post-table__row-cell ${key}`}>
        {label}
      </div>
    ))}
  </div>
);

export default PostTableHeader;
