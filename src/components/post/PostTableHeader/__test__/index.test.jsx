import React from 'react';
import { render } from '@testing-library/react';

import PostTableHeader from '../PostTableHeader';

describe('<PostTableHeader />', () => {
  it('should render a prop', () => {
    const { container } = render(
      <PostTableHeader />
    );

    expect(container).toMatchSnapshot();
  })
});
