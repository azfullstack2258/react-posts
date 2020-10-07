import React from 'react';

import { COLUMNS } from './constants';
import './style.scss';

const PostTableHeader = () => (
  <div className="post-table__header">
    <div className="post-table__row">
      {COLUMNS.map(({ key, label }) => (
        <div key={key} className={`post-table__row-cell--${key}`}>
          {label}
        </div>
      ))}
    </div>
  </div>
);

export default PostTableHeader;
