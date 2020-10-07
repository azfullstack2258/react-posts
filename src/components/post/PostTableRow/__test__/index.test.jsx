import React from 'react';
import { render } from '@testing-library/react';

import PostTableRow from '../PostTableRow';

describe('<PostTableRow />', () => {
  it('should render a prop', () => {
    const { container } = render(
      <PostTableRow />
    );

    expect(container).toMatchSnapshot();
  })
});
